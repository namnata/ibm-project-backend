const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name: {type: String, required: true},
    code_name: {type: String},
    address: {type: String},
    phone: {type: String},
    email: {type: String}
});

ClientSchema
    .virtual('url')
    .get(() => {return '/client/' + this._id});

const ClientModel = mongoose.model('Client', ClientSchema, 'clients');
module.exports = ClientModel;
