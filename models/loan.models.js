const mongoose = require('mongoose');

const LoanSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    phonenumber: {type: String, required: true},
    email: {type: String},
    date: {type: Date, default: Date.now},
    picture: {type: String},
    applicant: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Loan', LoanSchema);