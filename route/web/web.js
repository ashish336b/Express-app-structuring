var express = require("express");
var router = express.Router();

//call controllers
var UsersController = require("../../app/controller/UsersController");
var BaseController = require("../../app/controller/BaseController");
var ProductController = require("../../app/controller/ProductCotroller");

// define the home page route
router.get("/", BaseController.HomePage);

router.post("/users", UsersController.AddUsers);

router.post("/addProduct", ProductController.AddProduct);

//404 routes
router.use(BaseController.PageNotFound);

//500 routes
router.use(BaseController.BadRequest);

module.exports = router;
