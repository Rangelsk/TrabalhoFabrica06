const express = require('express');
const connection = require('./database/connection');

const routes = express.Router();

routes.post('/fichas', (request, response) => {
    const data = request.body;

    connection('raca').insert({
        id_raca,
        nome_raca,
        deslocamento
    }); 

    connection('raca_feature').insert({
        id_raca_feature,
        nome_raca_feature,
        descricao,
        raca_id,
    });

    connection('classe').insert({
        id_classe,
        nome_classe,
        vida_classe
    });

    connection('classe').insert({
        id_classe_feature,
        nome_classe_feature,
        descricao_classe_feature,
        classe_id
    });

});

module.exports = routes;
