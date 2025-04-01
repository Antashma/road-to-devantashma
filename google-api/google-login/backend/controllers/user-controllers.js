async function logout(req, res) {
        req.session = null;
        res.redirect("http://localhost:5173");    
}

async function getUser(req, res) {
    if(req.user) {
        res.json(req.user)
    } else {
        res.status(401).json({msg: "Not authenticated!"})
    }
}

module.exports = {
    logout,
    getUser
}