const { request, response } = require('express');
const express = require('express');

const racasController = require('./controllers/racasController');

const connection = require('./database/connection');

const routes = express.Router();

routes.get('/racas', racasController.list);
routes.post('/racas', racasController.create);


module.exports = routes;
