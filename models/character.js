const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    element: {
        type: String,
    },
    description: {
        type: String,
    },
    title: {
        type: String,
    },
    rarity: {
        type: String,
    },
    weapon: {
        type: String,
    },
    card: {
        type: String,
    },
    icon: {
        type: String,
    },
    splash: {
        type: String,
    },
    video: {
        type: String,
    },
}, { versionKey: false });

module.exports = mongoose.model('Character', characterSchema, 'character');