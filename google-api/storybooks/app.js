const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const passport = require("passport");
const session = require("express-session");
const path = require("path");
const MongoStore = require("connect-mongo");
const connectDB = require("./db");

//load config
dotenv.config({path: "./config/config.env"});
//passport config
require("./config/passport")(passport);

const app = express();

//Logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

//Handlebars
app.engine(".hbs", exphbs.engine({defaultLayout: "main", extname: ".hbs"}));
app.set("view engine", ".hbs");

//express session middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
       mongoUrl: process.env.MONGO_URI
    })
}))

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Static Folder
app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use("/auth", require("./routes/auth"));
app.use("/", require("./routes/index"));

async function start() {
    const PORT = process.env.PORT;
    
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}...`)
        })  

    } catch (error) {
        console.log(error);
    }
}

start();
