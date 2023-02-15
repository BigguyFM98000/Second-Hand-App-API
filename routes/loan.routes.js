module.exports = app => {
    const user = require("../controllers/loan.controller");
    const express = require("express");
    const router = express.Router();

    //Get all Method
    router.get("/", user.getAllLoans);

    //Get by ID Method
    router.get("/:id", user.findOne);

    //Post Method
    router.post("/", user.create);

     //Delete by ID Method
    router.delete("/:id", user.deleteUser);

    app.use("/api/loans", router);
}

