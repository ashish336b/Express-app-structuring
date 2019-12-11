var express = require("express");
var router = express.Router();

// define the home page route
router.get("/", function(req, res) {
  res.render("index");
});

//404 routes
router.use((req, res, next) => {
  res.status(404).render("404");
});


//500 routes
router.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});


module.exports = router;

