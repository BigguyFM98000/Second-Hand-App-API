require('dotenv').config(); //Dotenv to manage a .env file.

const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose")
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = process.env.DATABASE;
db.url = require("./user.models")(mongoose)

module.exports = db