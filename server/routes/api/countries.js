const express = require('express');
const router = express.Router();
const countries = require('../../countries');
const uuid = require('uuid');

/**
 * @route GET api/countries
 * @desc Retrives all countries
 **/
router.get('/', (req, res) => res.json(countries));

module.exports = router;