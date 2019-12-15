//Import All Model
const UsersModel = require("../model/Users");

exports.AddUsers = (req, res, next) => {
  const Users = new UsersModel({ f_name: "Abhishek" });
  Users.save().then(result => {
    console.log(result);
    console.log("created");
  });
  res.send("ok");
};
