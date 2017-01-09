//Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var contract = new Schema({
    partyA: {
        name: {
            first: String,
            last: String
        },
        email: String,
        phoneNumber: String,
        address: String,
        signature: String,
        date: String
    },
    partyB: {
        name: {
            first: String,
            last: String
        },
        email: String,
        phoneNumber: String,
        address: String,
        signature: String,
        date: String
    },
    contractBody: String
});

//Return Model
module.exports = mongoose.model('Contract', contract);
