const express = require("express");
const dotenv = require("dotenv");
const passport = require("passport");
const session = require("cookie-session");
const cors = require("cors");
const connect = require("./connect");

//load dotenv config
dotenv.config({path:"./config/config.env"});
//passport config
require("./config/passport")(passport);

const app = express();

app.use(cors());

//sessions
app.use(session({
    name: "focusTaskSession",
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
}));

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//routes
const userRouter = require("./routes/user-routes");
app.use("/", userRouter);


async function start() {
    const port = process.env.PORT;
    try {
        await connect();
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`)
        })
    } catch(err) {
        console.log(err)
    }
    
}

start();