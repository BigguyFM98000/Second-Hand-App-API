const Loan = require('../models/loan.models');
const db = require("../config/db.config");


exports.create = async (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const phonenumber = req.body.phonenumber;
    const pictures = req.body.pictures;

    // Validate the user data
    if (
      !firstname &&
      firstname.trim() === "" &&
      lastname &&
      lastname.trim() === "" &&
      email &&
      email.trim() === "" && 
      !phonenumber && phonenumber.trim() === "" && 
      !pictures && pictures.trim() === ""
    ) {
      return res.status(422).json({
        message: "Inavlid user data",
      });
    }
  
    // Create new user
    const loan = new Loan({
      firstname: req.body.username,
      lastname: req.body.email,
      email: req.body.password,
      phonenumber: req.body.phonenumber,
      pictures: req.body.pictures,
    });
  
    // Save Employee in the database
    await loan
      .save(loan)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send({
          message:
            error.message || "Some error occurred while creating the loan.",
        });
      });
  };

const getAllLoans = async (req, res) => {
    let loans;
    try {
        loans = await Loan.find();
    } catch (error) {
      // return {message: error.message};
      console.log(error);
    }
    if (!loans) {
      return res.status(404).json({
        message: "No users found",
      });
    }
    return res.status(200).json(loans);
  };

  exports.findOne = async (req, res) => {
    const id = req.params.id;
    await Loan.findById(id).then(data => {
        if(!data){
            res.status(404).send({message: "Not found loan with id: "+id});
        }else{
            res.send(data)
            }
        }).catch(error => {
            res.status(500).send({message: "Error retrieving loan with id: "+ id})
        })
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    let loantodelete;
    try {
        loantodelete = await Loan.findByIdAndRemove(id);
    } catch (error) {
      console.log(error);
    }
    if (!loantodelete) {
      return res.status(500).json({
        message: "Unable to delete loan data",
      });
    }
    return res.status(200).json({ message: "Loan deleted successfully!" });
  };

  exports.getAllLoans = getAllLoans;
  exports.deleteUser = deleteUser;