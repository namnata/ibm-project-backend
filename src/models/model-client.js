const mongoose = require('mongoose');

//TODO Clean
//TODO Different Schema for client
//TODO Different Schema for tags?
const ClientSchema = new mongoose.Schema({
    client_name: this.state.client_name,
    client_code_name: this.state.client_code_name,
    client_address: this.state.address,
    client_phone: this.state.phone,
    client_email: this.state.email
});

ClientSchema
    .virtual('url')
    .get(() => {return '/client/' + this._id});

const ClientModel = mongoose.model('Client', ClientSchema, 'clients');
module.exports = ClientModel;
