const express = require('express');

const fichasController = require('./controllers/fichasController');
const racasController = require('./controllers/racasController');
const racasFeaturesController = require('./controllers/racasFeaturesController');
const classesController = require('./controllers/classesController');
const classesFeaturesController = require('./controllers/classesFeaturesController');
const proeficienciasController = require('./controllers/proeficienciasController');

const connection = require('./database/connection');

const routes = express.Router();

//Rotas para as Fichas
routes.get('/fichas', fichasController.listar);
routes.post('/fichas', fichasController.cadastrar);
routes.put('/fichas/:id_ficha', fichasController.atualizar);
routes.delete('/fichas/:id_ficha', fichasController.deletar);

//Rotas para Raças
routes.get('/racas', racasController.listar);
routes.post('/racas', racasController.cadastrar);
routes.put('/racas/:id_raca', racasController.atualizar);
routes.delete('/racas/:id_raca', racasController.deletar);

//Rotas para Raças Features
routes.get('/racasFeatures', racasFeaturesController.listar);
routes.post('/racasFeatures', racasFeaturesController.cadastrar);
routes.put('/racasFeatures/:id_raca_feature', racasFeaturesController.atualizar);
routes.delete('/racasFeatures/:id_raca_feature', racasFeaturesController.deletar);

//Rotas para Classes
routes.get('/classes', classesController.listar);
routes.post('/classes', classesController.cadastrar);
routes.put('/classes/:id_classe', classesController.atualizar);
routes.delete('/classes/:id_classe', classesController.deletar);

//Rotas para Classes Features
routes.get('/classesFeatures', classesFeaturesController.listar);
routes.post('/classesFeatures', classesFeaturesController.cadastrar);
routes.put('/classesFeatures/:id_classe_feature', classesFeaturesController.atualizar);
routes.delete('/classesFeatures/:id_classe_feature', classesFeaturesController.deletar);

//Rotas para Proeficiencias
routes.get('/proeficiencias', proeficienciasController.listar);
routes.post('/proeficiencias', proeficienciasController.cadastrar);
routes.put('/proeficiencias/:id_proeficiencias', proeficienciasController.atualizar);
routes.delete('/proeficiencias/:id_proeficiencias', proeficienciasController.deletar);

module.exports = routes;
