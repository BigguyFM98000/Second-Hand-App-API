
  const express = require("express");
  const {
    getAllUser,
    addUser,
    updateUser,
    deleteUser,
    getUserById,
  } = require("../controllers/user.controller");
  const router = express.Router();

  //Post Method
  router.post("/post", addUser);

  //Get all Method
  router.get("/getAll", getAllUser);

  //Get by ID Method
  router.get("/getOne/:id", getUserById);

  //Update by ID Method
  router.put("/update/:id", updateUser);

  //Delete by ID Method
  router.delete("/delete/:id", deleteUser);

 
  module.exports = router
