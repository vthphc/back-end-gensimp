const mongoose = require('mongoose');

const armSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    type: {
        type: String,
    },
    rarity: {
        type: String,
    },
    affix: {
        type: String,
    },
    description: {
        type: String,
    },
    icon: {
        type: String,
    },
    card: {
        type: String,
    },
}, { versionKey: false });

module.exports = mongoose.model('Arm', armSchema, 'arm');