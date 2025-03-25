const passport = require("passport");


// function login(){
//     passport.authenticate("google", {scope: ["profile", "email"]});
// }

// function callback() {
//     passport.authenticate("google", {failureRedirect: "/"});
//     res.redirect("/dashboard");
// }

async function logout(req, res) {
    req.logout();
    res.redirect("/");
}

async function dashboard(req, res) {
    res.send(`Welcome, ${req.user.displayName}!`);
}

async function test(req, res) {
    res.send("Hello world!!!")
}

module.exports = {
    // login,
    // callback,
    dashboard,
    logout,
    test
}