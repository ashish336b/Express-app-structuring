//Import All Model
const UsersModel = require("../model/UsersModel");

exports.AddUsers = (req, res, next) => {
  const Users = new UsersModel({ f_name: "Hari", l_name: "Bhandari" });
  Users.save().then(result => {
    res.send(result);
  });
};
