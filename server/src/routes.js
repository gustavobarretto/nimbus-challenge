const { Router } = require('express');

const NeighbourhoodController = require('./app/controllers/NeighbourhoodController');

const router = Router();

// Post
router.post('/neighbourhoods', NeighbourhoodController.store);
// Get
router.get('/neighbourhoods/:name', NeighbourhoodController.show);

router.get('/', (req, res) => {
  res.json('FUNCIONEI');
});

module.exports = router;
