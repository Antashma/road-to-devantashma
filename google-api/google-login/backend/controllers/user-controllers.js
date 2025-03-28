async function logout(req, res) {
        req.session = null;
        res.redirect("http://localhost:5173/");    
}

async function getUser(req, res) {
    res.send(req.session);
    // if (!req.session.isPopulated) {
    //     return res.status(400).json({msg: "No session in place!"})
    // }
    // const { firstName, image } = req.session.passport.user;
    // res.status(200).json({data: {
    //     name: firstName,
    //     imageUrl: image
    // }});
}

module.exports = {
    logout,
    getUser
}