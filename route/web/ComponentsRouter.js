var express = require("express");
var router1 = express.Router();

// define the home page route
router1.get("/buttons", require("../../app/controller/ComponentController").Buttons);


module.exports = router1;
