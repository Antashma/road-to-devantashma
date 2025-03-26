const express = require("express");
const passport = require("passport");
const router = express.Router();

// @desc Auth with gGogle
// @route GET /auth/google
router.get("/google", passport.authenticate("google", {scope: ["profile"]}));

// @desc Google Auth callback
// @route GET /auth/google/callback
router.get(
    "/google/callback", 
    passport.authenticate("google", {failureRedirect: "/"}),
    (req, res) => {
        res.redirect("/dashboard");
    }
);

// @desc Logout user
// @route GET /auth/logout
router.get("/logout", (req, res, next) => {
    req.logout(err => {
        if(err) return next(err);
        res.redirect("/");
    });
});

module.exports = router;
