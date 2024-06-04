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
        description: req.body.description,
        title: req.body.title,
        rarity: req.body.rarity,
        weapon: req.body.weapon,
        card: req.body.card,
        icon: req.body.icon,
        splash: req.body.splash,
        video: req.body.video,
    });

    try {
        const savedCharacter = await character.save();
        res.json(savedCharacter);
    } catch (error) {
        res.json({ message: error });
    }
});

router.put('/:characterId', async (req, res) => {
    try {
        const updatedCharacter = await Character.findByIdAndUpdate(req.params.characterId, {
            name: req.body.name,
            element: req.body.element,
            description: req.body.description,
            title: req.body.title,
            rarity: req.body.rarity,
            weapon: req.body.weapon,
            card: req.body.card,
            icon: req.body.icon,
            splash: req.body.splash,
            video: req.body.video,
        }, { new: true });
        res.json(updatedCharacter);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:characterId', async (req, res) => {
    try {
        const removedCharacter = await Character.findByIdAndDelete(req.params.characterId);
        if (!removedCharacter) {
            return res.status(404).json({ message: 'Character not found' });
        }
        res.json(removedCharacter);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;