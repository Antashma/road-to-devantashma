const express = require("express");
const passport = require("passport");
const router = express.Router();

const { login, logout, callback, dashboard, test } = require("../controllers/user-controllers");
const isAuthenticated = require("../middleware/isAuthenticated");

router.route("/auth/google").get(passport.authenticate("google", {scope: ["profile", "email"]}));

router.route("/auth/google/callback")
    .get(
        passport.authenticate("google", {failureRedirect: "/"}),
        (req, res) => res.redirect("/dashboard")
    );

router.route("/logout").get(logout);

router.route("/dashboard").get(isAuthenticated, dashboard)

router.route("/test").get(test)

module.exports = router;


