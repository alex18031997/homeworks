const mongoose = require('../models/db'),
    Schema = mongoose.Schema;

const schema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    PassСon: {
        type: String,
        required: true
    },
    DataReg: {
        type: String
    }
});

exports.User = mongoose.model('User', schema);