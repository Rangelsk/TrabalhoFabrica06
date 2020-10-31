const express = require('express');

const racasController = require('./controllers/racasController');
const classesController = require('./controllers/classesController');
const proeficienciasController = require('./controllers/proeficienciasController');

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
routes.delete('/classes/:id_classe', classesController.delete);

//Rotas para Proeficiencias
routes.get('/proeficiencias', proeficienciasController.list);
routes.post('/proeficiencias', proeficienciasController.create);
routes.put('/proeficiencias/:id_proeficiencias', proeficienciasController.update);
routes.delete('/proeficiencias/:id_proeficiencias', proeficienciasController.delete);

module.exports = routes;
