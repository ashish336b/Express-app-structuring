const express = require("express");
const app = express();
var Routes = require("./route/web/web");

//set the view templates engines
app.set("view engine", "ejs");
app.set("views", "views");

//port to listen
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server started on : http://localhost:${port}`);
});
//auto include global middleware like laravel kernel.php
var middleware = require("./app/kernel");
middleware.forEach(element => {
  app.use(require("./app/middleware/" + element));
});

app.use(Routes);

//connect to database
