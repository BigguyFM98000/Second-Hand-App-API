module.exports = app => {
  const user = require("../controllers/user.controller");
  const express = require("express");
  const router = express.Router();

  //Post Method
  router.post("/", user.create);

  //Get all Method
  router.get("/", user.getAllUser);

  //Get by ID Method
  router.get("/:id", user.findOne);

  //Update by ID Method
  router.put("/:id", user.update);

  //Delete by ID Method
  router.delete("/:id", user.deleteUser);

 app.use("/api/users", router);
}
