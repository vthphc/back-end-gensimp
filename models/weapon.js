const mongoose = require('mongoose');

const weaponSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    icon: {
        type: String,
    },
}, { versionKey: false });

module.exports = mongoose.model('Weapon', weaponSchema, 'weapon');