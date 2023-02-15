
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
  router.post("/", addUser);

  //Get all Method
  router.get("/", getAllUser);

  //Get by ID Method
  router.get("/:id", getUserById);

  //Update by ID Method
  router.put("/:id", updateUser);

  //Delete by ID Method
  router.delete("/:id", deleteUser);

 
  module.exports = router
