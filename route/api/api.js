var express = require("express");
var router = express.Router();

// define the home page route
router.get("/", require("../../app/controller/BaseController").HomePage);

router.post("/users", require("../../app/controller/UsersController").AddUsers);

//404 routes
router.use(require("../../app/controller/BaseController").PageNotFound);

//500 routes
router.use(require("../../app/controller/BaseController").BadRequest);


module.exports = router;
