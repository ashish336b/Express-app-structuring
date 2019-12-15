const express = require("express");
const app = express();

//port to listen
const port = process.env.PORT || 3000;

//Routes included File
var Routes = require("./route/web/web");
app.use(Routes);

//set the view templates engines
app.set("view engine", "ejs");
app.set("views", "views");

//auto include global middleware like laravel kernel.php
var middleware = require("./app/kernel");
middleware.forEach(element => {
  app.use(require("./app/middleware/" + element));
});

//connect to database
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://nodejs:root@nodejs-peasn.mongodb.net/nodejs?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(res => {
    //connect to port 3000
    app.listen(port, () => {
      console.log(`server started on : http://localhost:${port}`);
    });
    console.log("Database connected successfully");
  })
  .catch(err => {
    console.log(err);
  });
