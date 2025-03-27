module.exports = {
    ensureAuth: function(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        } else {
            res.redirect("/");
        }
    },
    //if logged in and go to landing page, they will go to dashboard NOT login
    ensureGuest: function(req, res, next) {
        if (req.isAuthenticated()) {
            res.redirect("/dashboard");
        } else {
            return next();
        }
    }
}