import mongoose from 'mongoose';

const LoanSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    phonenumber: {type: Number, required: true},
    email: {type: String, required: true, unique: true},
    date: {type: Date, default: Date.now},
    pictures: [{type: String, required: true}],
    applicant: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Loan', LoanSchema);