const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    allLoans: [{type: Schema.Types.ObjectId, ref: 'Loan'}],
    
});

// const user = mongoose.model('User',userSchema);
// module.exports = user;
module.exports = mongoose.model('User', userSchema);