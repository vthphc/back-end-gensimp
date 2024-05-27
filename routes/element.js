const express = require('express');
const router = express.Router();
const Element = require('../models/element');

router.get('/', async (req, res) => {
    try {
        const elements = await Element.find();
        res.json(elements);
    } catch (error) {
        res.json({ message: error });
    }
});

router.get('/:elementId', async (req, res) => {
    try {
        const element = await Element.findById(req.params.elementId);
        res.json(element);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;