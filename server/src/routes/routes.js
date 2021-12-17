const express = require('express');
const routes = express.Router();
const bodyParser = require('body-parser').json();
const { checkBodyRain, rainPostController, rainGetController } = require('../controllers/controller')

//Routes

//Post
routes.post('/rains/', checkBodyRain, bodyParser, rainPostController)
// Get
routes.get('/rains/:neighbourhood', rainGetController)

module.exports = routes