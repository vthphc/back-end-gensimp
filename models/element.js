const mongoose = require('mongoose');

const elementSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    icon: {
        type: String,
    },
}, { versionKey: false });

module.exports = mongoose.model('Element', elementSchema, 'element');