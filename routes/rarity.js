const express = require('express');
const router = express.Router();
const Rarity = require('../models/rarity');

router.get('/', async (req, res) => {
    try {
        const rarities = await Rarity.find();
        res.json(rarities);
    } catch (error) {
        res.json({ message: error });
    }
});

router.get('/:rarityId', async (req, res) => {
    try {
        const rarity = await Rarity.findById(req.params.rarityId);
        res.json(rarity);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;