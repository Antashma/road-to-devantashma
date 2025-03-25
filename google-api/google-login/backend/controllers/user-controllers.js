const User = require("../models/User");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");


passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({
        googleId: profile.id
    })
    
    if (existingUser) {
        return done(null, existingUser);
    }

    const newUser = await new User({
        googleId: profile.id,
        displayName: profile.displayName,
        email: profile.emails[0].value
    }).save();

    done(null, newUser);

}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});


async function login(req, res){
    passport.authenticate("google", {scope: ["profile", "email"]});
}

async function callback(req, res) {
    passport.authenticate("google", {failureRedirect: "/"});
    res.redirect("/dashboard");
}

async function logout(req, res) {
    req.logout();
    res.redirect("/");
}

async function dashboard(req, res) {
    res.send(`Welcome, ${req.user.displayName}!`);
}

module.exports = {
    login,
    callback,
    dashboard,
    logout
}