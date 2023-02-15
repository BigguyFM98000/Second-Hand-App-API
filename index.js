const express = require("express"); // Express will be used for the middleware to create various CRUD endpoints.
const cors = require("cors"); // cors provides Express middleware to enable CORS with various options.
const mongoose = require("mongoose"); // Mongoose for managing data in MongoDB using various queries.
const bodyParser = require("body-parser");
require("dotenv").config(); //Dotenv to manage a .env file.

const app = express();
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "*",
  ],
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models/server.js");
const drUrl = require("./config/db.config.js");
mongoose
  .connect(drUrl.url, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// Default route
app.get("/", (req, res) => {
  res.json({message: "Welcome to Express MongoDB application."})
})

require("./routes/user.routes")(app);
require("./routes/loan.routes")(app);

// Set port and listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});



