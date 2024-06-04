const express = require('express');
const router = express.Router();
const Arm = require('../models/arm');

router.get('/', async (req, res) => {
    try {
        const arms = await Arm.find();
        res.json(arms);
    } catch (error) {
        res.json({ message: error });
    }
});

router.get('/:armId', async (req, res) => {
    try {
        const arm = await Arm.findById(req.params.armId);
        res.json(arm);
    } catch (error) {
        res.json({ message: error });
    }
});

router.post('/', async (req, res) => {
    const arm = new Arm({
        name: req.body.name,
        type: req.body.type,
        rarity: req.body.rarity,
        affix: req.body.affix,
        description: req.body.description,
        icon: req.body.icon,
        card: req.body.card,
    });

    try {
        const savedArm = await arm.save();
        res.json(savedArm);
    } catch (error) {
        res.json({ message: error });
    }
});

router.put('/:armId', async (req, res) => {
    try {
        const updatedArm = await Arm.findByIdAndUpdate(req.params.armId, {
            name: req.body.name,
            type: req.body.type,
            rarity: req.body.rarity,
            affix: req.body.affix,
            description: req.body.description,
            icon: req.body.icon,
            card: req.body.card,
        }, { new: true });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:armId', async (req, res) => {
    try {
        const removedArm = await Arm.findByIdAndDelete(req.params.armId);
        if (!removedArm) throw new Error('Arm not found');
        res.json(removedArm);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;