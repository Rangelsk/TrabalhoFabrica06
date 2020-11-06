const express = require('express');

const racasController = require('./controllers/racasController');
const racasFeaturesController = require('./controllers/racasFeaturesController');
const classesController = require('./controllers/classesController');
const classesFeaturesController = require('./controllers/classesFeaturesController');
const proeficienciasController = require('./controllers/proeficienciasController');

const connection = require('./database/connection');

const routes = express.Router();

//Rotas para Raças
routes.get('/racas', racasController.list);
routes.post('/racas', racasController.create);
routes.put('/racas/:id_raca', racasController.update);
routes.delete('/racas/:id_raca', racasController.delete);

//Rotas para Raças Features
routes.get('/racasFeatures', racasFeaturesController.list);
routes.post('/racasFeatures', racasFeaturesController.create);
routes.put('/racasFeatures/:id_raca_feature', racasFeaturesController.update);
routes.delete('/racasFeatures/:id_raca_feature', racasFeaturesController.delete);

//Rotas para Classes
routes.get('/classes', classesController.list);
routes.post('/classes', classesController.create);
routes.put('/classes/:id_classe', classesController.update);
routes.delete('/classes/:id_classe', classesController.delete);

//Rotas para Classes Features
routes.get('/classesFeatures', classesFeaturesController.list);
routes.post('/classesFeatures', classesFeaturesController.create);
routes.put('/classesFeatures/:id_classe_feature', classesFeaturesController.update);
routes.delete('/classesFeatures/:id_classe_feature', classesFeaturesController.delete);

//Rotas para Proeficiencias
routes.get('/proeficiencias', proeficienciasController.list);
routes.post('/proeficiencias', proeficienciasController.create);
routes.put('/proeficiencias/:id_proeficiencias', proeficienciasController.update);
routes.delete('/proeficiencias/:id_proeficiencias', proeficienciasController.delete);

module.exports = routes;
