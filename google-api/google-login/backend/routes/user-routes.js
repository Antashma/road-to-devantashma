const express = require("express");
const passport = require("passport");
const router = express.Router();

const { logout, getUser } = require("../controllers/user-controllers");
const isAuthenticated = require("../middleware/isAuthenticated");

router.route("/auth/google").get(passport.authenticate("google", {scope: ["profile", "email"]}));

router.route("/auth/google/callback")
    .get(
        passport.authenticate("google", {failureRedirect: "/"}),
        (req, res) => res.redirect("http://localhost:5173/dashboard")
    );

router.route("/auth/logout").get(logout);

router.route("/auth/user").get(getUser);


module.exports = router;


