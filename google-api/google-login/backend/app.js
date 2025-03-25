const express = require("express");
const passport = require("passport");
const session = require("cookie-session");
const dotenv = require("dotenv");
dotenv.config();
const connect = require("./connect");
const isAuthenticated = require("./middleware/isAuthenticated");


const app = express();

app.use(session({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
}));

app.use(passport.initialize());
app.use(passport.session());

const userRouter = require("./routes/user-routes");

app.use("/", userRouter);

app.use(isAuthenticated);

const port = process.env.PORT;

async function start() {
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