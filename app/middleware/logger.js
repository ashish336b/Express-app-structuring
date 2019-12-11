const moment = require("moment");
var logger = (req, res, next) => {
    var fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
    console.log(`${fullUrl} : ${moment().format()}`);
    next();
  };

  module.exports = logger;