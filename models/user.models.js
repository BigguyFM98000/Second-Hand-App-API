const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGF3biUyMHNob3AlMjBsb2dvJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
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

const user = new mongoose.model('User',userSchema);
module.exports = user;
// module.exports = mongoose.model('User', userSchema);