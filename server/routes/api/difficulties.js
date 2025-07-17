const express = require('express');
const router = express.Router();
const difficulties = require('../../difficulties');
const uuid = require('uuid');

/**
 * @route GET api/difficulties
 * @desc Retrives all difficulties
 **/
router.get('/', (req, res) => res.json(difficulties));

module.exports = router;