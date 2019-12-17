require('dotenv').config();
const express = require("express");
const app = express();
//define base url of application
app.locals.baseUrl = 'http://localhost:3000';
//use public folder as static
app.use(express.static(__dirname + '/public'));


//port to listen
const port = process.env.PORT || 3000;

//Routes included File
app.use('/components', require('./route/web/ComponentsRouter'));
app.use(require("./route/web/webRouter"));


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
        "mongodb+srv://nodejs:root@nodejs-peasn.mongodb.net/" + process.env.DB_NAME + "?retryWrites=true&w=majority",
        {useNewUrlParser: true, useUnifiedTopology: true}
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
