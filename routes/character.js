const express = require('express');
const router = express.Router();
const Character = require('../models/character');

router.get('/', async (req, res) => {
    try {
        const characters = await Character.find();
        res.json(characters);
    } catch (error) {
        res.json({ message: error });
    }
});

router.get('/:characterId', async (req, res) => {
    try {
        const character = await Character.findById(req.params.characterId);
        res.json(character);
    } catch (error) {
        res.json({ message: error });
    }
});

router.post('/', async (req, res) => {
    const character = new Character({
        name: req.body.name,
        element: req.body.element,
        weapon: req.body.weapon,
    });

    try {
        const savedCharacter = await character.save();
        res.json(savedCharacter);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;