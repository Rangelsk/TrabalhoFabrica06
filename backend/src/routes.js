const express = require('express');

const racasController = require('./controllers/racasController');

const connection = require('./database/connection');

const routes = express.Router();

//Rotas para Raças
routes.get('/racas', racasController.list);
routes.post('/racas', racasController.create);
routes.put('/racas/:id_raca', racasController.update);
routes.delete('/racas/:id_raca', racasController.delete);

//Rotas para Classes
routes.get('/classes', classesController.list);
routes.post('/classes', classesController.create);
routes.put('/classes/:id_classe', classesController.update);
routes.delete('/classes:id_classe', classesController.delete);

module.exports = routes;
