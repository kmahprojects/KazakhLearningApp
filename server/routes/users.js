const express = require('express');
const User = require('../models/User');
const router = express.Router();
const uuid = require(`uuid`);

// GET user
router.get('/', async (req, res) => {
    try {
    const users = await User.find();
    res.json(users);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
});

// CREATE a new user
router.post('/', async (req, res) => {
    const users = new User({
    name: req.body.name,
    country: req.body.country,
    latinCountry: req.body.latinCountry,
    kzCountry: req.body.kzCountry,
    });
    try {
    const newUser = await users.save();
    res.status(201).json(newUser);
    } catch (error) {
    res.status(400).json({ message: error.message });
    }
});

// UPDATE a user
router.put(`/:id`, async (req, res)=> {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {selected: true}
        );
        res.json(updatedUser);
        
        } catch (error) {
        res.status(400).json({ message: error.message });
        }
})

//PATCH the other users
router.patch(`/:id`, async (req, res)=> {
    try {

        const updatedOthers = await User.updateMany(
            { _id: { $ne: req.params.id} },
            {selected: false}
        );
        res.json(updatedOthers);
        
        } catch (error) {
        res.status(400).json({ message: error.message });
        }
})
module.exports = router;