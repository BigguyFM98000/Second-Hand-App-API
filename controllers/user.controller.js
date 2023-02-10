const { get } = require("mongoose");
// const Model = require('./models/user.model');
const User = require('../models/users');
// const db = require("../config/")


const getAllUsers = async (req, res) => {
    let users;
    try {
        users = await User.find();
    } catch (error) {
        // return {message: error.message};
        console.log(error);
    }
    if(!users){
        return res.status(404).json({
            message: 'No users found'
        });
    }
    return res.status(200).json(users);
};

const addUser = async (req, res) => {
    // const { username, email, password } = req.body;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    if(!username && username.trim() === '' && email && email.trim() === '' && password && password.trim() === ''){
        return res.status(422).json({
            message: 'Inavlid user data'
        });
    }
    
    let datatoadd;
    try {
        user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        datatoadd = await user.save();
    } catch (error) {
        // return {message: error.message};
        console.log(error);
    }
    if(!datatoadd){
        return res.status(500).json({
            message: 'Unable to save user data'
        });
    }
    return res.status(201).json({datatoadd});
};

const updateUser = async (req, res) => {
    const id = req.params.id;
    const {username, email, password } = req.body;
    if(!username && username.trim() === '' && email && email.trim() === '' && password && password.trim() === ''){
        return res.status(422).json({
            message: 'Inavlid user data'
        });
    }

    let usertoupdate;
    try {
        usertoupdate = await User.findByIdAndUpdate(id, {
            username,
            email,
            password
        });
    } catch (error) {
        console.log(error);
    }
    if(!usertoupdate){
        return res.status(500).json({
            message: 'Unable to update user data'
        });
    }
    return res.status(200).json({message: 'Updated successfully!'});
};

const deleteUser = async (req, res) => {
    const id = req.params.id;
    let usertodelete;
    try {
        usertodelete = await User.findByIdAndRemove(id);
    } catch (error) {
        console.log(error);
    }
    if(!usertodelete){
        return res.status(500).json({
            message: 'Unable to delete user data'
        });
    }
    return res.status(200).json({message: 'User deleted successfully!'});
};

const getUserById = async (req, res) => {
    const id = req.params.id;
    let userdata;
    try {
        userdata = await User.findById(id);
    } catch (error) {
        console.log(error);
    }
    if(!userdata){
        return res.status(500).json({
            message: 'Unable to find user with given id'
        });
    }
    return res.status(200).json(user);
};

exports.getAllUser = getAllUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.getUserById = getUserById;