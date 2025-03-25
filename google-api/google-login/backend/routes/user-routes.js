const express = require("express");
const router = express.Router();

const { login, logout, callback, dashboard } = require("../controllers/user-controllers");

router.route("/auth/google").get(login);

router.route("/auth/google/callback").get(callback);

router.route("/logout").get(logout);

router.route("/dashboard").get(dashboard)

module.exports = router;


