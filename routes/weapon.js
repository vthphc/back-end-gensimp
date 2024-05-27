const express = require('express');
const router = express.Router();
const Weapon = require('../models/weapon');

router.get('/', async (req, res) => {
    try {
        const weapons = await Weapon.find();
        res.json(weapons);
    } catch (error) {
        res.json({ message: error });
    }
});

router.get('/:weaponId', async (req, res) => {
    try {
        const weapon = await Weapon.findById(req.params.weaponId);
        res.json(weapon);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;