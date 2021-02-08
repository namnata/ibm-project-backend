const mongoose = require('mongoose');

//TODO Salt password?
const UserSchema = new mongoose.Schema({
    employee_id: {type: String, required: true},
    name: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},

});

const UserModel = mongoose.model('User', UserSchema, 'users');
module.exports = UserModel;
