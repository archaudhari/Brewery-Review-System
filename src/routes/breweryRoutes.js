const express = require('express');
const router = express.Router();
const breweryController = require('../controllers/breweryController');

router.get('/search', breweryController.searchBreweries);
router.get('/:id', breweryController.getBreweryById);

module.exports = router;
