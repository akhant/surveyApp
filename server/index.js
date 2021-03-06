const express = require("express");
const keys = require("./config/keys");
const app = express();

//mongodb
const mongoose = require("mongoose");

mongoose.connect(keys.mongoURI);

//midelwares
const passport = require("passport");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
require("./services/passport");

app.use(passport.initialize());
app.use(passport.session());
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);


if (process.env.NODE_ENV === "production") {
  
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
  });
}


//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("running");
});


//for heroku deploy:
//1.Dinamic Port
//2.Node and Npm version in package.json
//3.Start script in package.json
//4.Add .gitignore file
