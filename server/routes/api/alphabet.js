const express = require('express');
const router = express.Router();
const alphabet = require('../../alphabet');
const uuid = require('uuid');

/**
 * @route GET api/alphabet
 * @desc Retrives all alphabet
 **/
router.get('/', (req, res) => res.json(alphabet));

module.exports = router;