const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    EmployeeID: {
        type: String,
        requires: true
    },
    EmployeeName: {
        type: String,
        requires: true
    },
    password: {
        type: String,
        requires: true
    },
    email: {
        type: String,
        requires: true
    }
});

const UserModel = mongoose.model('user_info',UserSchema);
module.exports = UserModel;
