const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// @desc Login/Landing page
// @route GET /
router.get("/", ensureGuest, (req, res) => {
    res.render("login", {
        layout: 'login'
    });
});

// @desc Dashboard
// @route GET /dashboard
router.get("/dashboard", ensureAuth, (req, res) => {
    console.log(`user: ${req.user}`);
    res.render("dashboard",  {
        name: req.user.firstName
    });
});


module.exports = router;
