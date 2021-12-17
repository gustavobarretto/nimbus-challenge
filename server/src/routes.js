const { Router } = require('express');

const NeighbourhoodController = require('./controllers/NeighbourhoodController');

const router = Router();

// Post
router.post('/neighbourhoods/', NeighbourhoodController.store);
// Get
router.get('/neighbourhoods/:name', NeighbourhoodController.show);

module.exports = router;

