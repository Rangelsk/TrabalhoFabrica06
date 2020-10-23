const { response } = require('express');
const { update } = require('../database/connection');
const connection = require('../database/connection');

module.exports = {

    async list (request, response) {
        const racas = await connection('raca').select('*');
    
        return response.json(racas);
    },
    
    async create(request, response){
        const {id_raca, nome_raca, deslocamento} = request.body;

    await connection('raca').insert({
        id_raca,
        nome_raca,
        deslocamento,
    });

    return response.json({ id_raca });
    },

    async delete(request, responde) {
        const { id_raca } = request.params;

    await connection('raca').where('id_raca', id_raca).delete();
    
    return response.status(204).send();
    },

    async update(request, response){
        const { id_raca } = request.params;
        const { nome_raca } = request.body;
        const { deslocamento } = request.body;

    await connection('raca').where('id_raca', id_raca).update({
        nome_raca,
        deslocamento
    });
    
    return response.json({ nome_raca, deslocamento });
    }
}
