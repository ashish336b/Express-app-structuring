exports.HomePage = (req, res) => {
  res.render("index");
};

exports.PageNotFound = (req, res, next) => {
  res.status(404).render("404");
};

exports.BadRequest = (err, req, res, next) => {
  res.status(500).send(err.stack);
};
