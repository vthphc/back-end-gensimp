const mongoose = require('mongoose');

const raritySchema = new mongoose.Schema({
    type: {
        type: Number,
    }
}, { versionKey: false });

module.exports = mongoose.model('Rarity', raritySchema, 'rarity');