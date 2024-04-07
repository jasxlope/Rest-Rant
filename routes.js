

const express = require('express');
const router = express.Router();

// Stubbed routes
router.get('/restaurants', (req, res) => {
    res.send('Get all restaurants');
});

router.get('/restaurants/:id', (req, res) => {
    const restaurantId = req.params.id;
    res.send(`Get restaurant with ID ${restaurantId}`);
});

router.post('/restaurants', (req, res) => {
    res.send('Create a new restaurant');
});

router.put('/restaurants/:id', (req, res) => {
    const restaurantId = req.params.id;
    res.send(`Update restaurant with ID ${restaurantId}`);
});

router.delete('/restaurants/:id', (req, res) => {
    const restaurantId = req.params.id;
    res.send(`Delete restaurant with ID ${restaurantId}`);
});

module.exports = router;
