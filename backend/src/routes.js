const { request, response } = require('express');
const express = require('express');

const racasController = require('./controllers/racasController');

const connection = require('./database/connection');

const routes = express.Router();

routes.get('/racas', racasController.list);
routes.post('/racas', racasController.create);
routes.delete('/racas/:id_raca', racasController.delete);
routes.put('/racas/:id_raca', racasController.update);


module.exports = routes;
