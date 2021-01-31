const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    client_name: {type: String},
    client_code_name: {type: String},
    client_address: {type: String},
    client_phone: {type: String},
    client_email: {type: String}
});

ClientSchema
    .virtual('url')
    .get(() => {return '/client/' + this._id});

const ClientModel = mongoose.model('Client', ClientSchema, 'clients');
module.exports = ClientModel;
