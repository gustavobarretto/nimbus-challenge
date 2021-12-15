const express = require('express');
const routes = express.Router();
const bodyParser = require('body-parser').json();
const { checkBodyRain, rainPostController, rainGetController } = require('../controllers/controller')

//Routes
//Post
routes.post('/rain/add', checkBodyRain, bodyParser, rainPostController)
// Get
routes.get('/rain/all', rainGetController)

module.exports = routes