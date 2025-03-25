const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const User = require("../models/User");


module.exports = function(passport) {
    passport.use(
        new GoogleStrategy({
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: "/auth/google/callback"
        }, 
        async (accessToken, refreshToken, profile, done) => {
            // const existingUser = await User.findOne({
            //     googleId: profile.id
            // })
        
        // if (existingUser) {
        //     return done(null, existingUser);
        // }

        // const newUser = await new User({
        //     googleId: profile.id,
        //     displayName: profile.displayName,
        //     email: profile.emails[0].value
        // }).save();

        // done(null, newUser);
        console.log(profile);
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id).then(user => {
            done(null, user);
        });
    })
}