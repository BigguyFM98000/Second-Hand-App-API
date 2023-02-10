
require('dotenv').config(); //Dotenv to manage a .env file.

const express = require('express'); //Express will be used for the middleware to create various CRUD endpoints.
const mongoose = require('mongoose'); //Mongoose for managing data in MongoDB using various queries.
const routes = require('./routes/user.routes');

// Lets connect mongoose to the database.
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

//Response messages for connection succes or failure
database.on('error', (error) => { //Here, database.on means it will connect to the database, and throws any error if the connection fails. 
    console.log(error)
})

database.once('connected', () => { //And database.once means it will run only one time. If it is successful, it will show a message that says Database Connected.
    console.log('Database Connected');
})
const app = express();
app.use('/api/users', routes)

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})