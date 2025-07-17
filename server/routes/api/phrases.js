const express = require('express');
const router = express.Router();
const phrases = require('../../phrases');
const uuid = require('uuid');

/**
 * @route GET api/phrases
 * @desc Retrives all phrases
 **/
router.get('/', (req, res) => res.json(phrases));

module.exports = router;