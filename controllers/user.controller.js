const { get } = require("mongoose");
// const Model = require('./models/user.model');
const User = require("../models/user.models");
const db = require("../config/db.config");

const getAllUsers = async (req, res) => {
  let users;
  try {
    users = await User.find();
  } catch (error) {
    // return {message: error.message};
    console.log(error);
  }
  if (!users) {
    return res.status(404).json({
      message: "No users found",
    });
  }
  return res.status(200).json(users);
};

exports.create = async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  // Validate the user data
  if (
    !username &&
    username.trim() === "" &&
    email &&
    email.trim() === "" &&
    password &&
    password.trim() === ""
  ) {
    return res.status(422).json({
      message: "Inavlid user data",
    });
  }

  // Create new user
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  // Save Employee in the database
  await user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "Some error occurred while creating the user.",
      });
    });
};

exports.update = async (req, res) => {
    
    // Validate that the data fields are not empty
    if (!req.body) {
      return res.status(422).json({
        message: "Inavlid user data",
      });
    }

    const id = req.params.id;
    await User.findByIdAndUpdate(id, req.body, { useFindAndModify: false}).then((data) => {
        if(!data){
            res.status(404).send({message: `Cannot update user with id: ${id}. Maybe user was noit found.`});
        }else{
            res.send({message: "User was updated successfully."});
        }
    }).catch((error) => {
        res.status(500).send(`Error updating user with id: ${id}.`);
    })
}

const deleteUser = async (req, res) => {
  const id = req.params.id;
  let usertodelete;
  try {
    usertodelete = await User.findByIdAndRemove(id);
  } catch (error) {
    console.log(error);
  }
  if (!usertodelete) {
    return res.status(500).json({
      message: "Unable to delete user data",
    });
  }
  return res.status(200).json({ message: "User deleted successfully!" });
};

exports.findOne = async (req, res) => {
    const id = req.params.id;
    await User.findById(id).then(data => {
        if(!data){
            res.status(404).send({message: "Not found user with id: "+id});
        }else{
            res.send(data)
            }
        }).catch(error => {
            res.status(500).send({message: "Error retrieving user with id: "+ id})
        })
}

exports.getAllUser = getAllUsers;


exports.deleteUser = deleteUser;

