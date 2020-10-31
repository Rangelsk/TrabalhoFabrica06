const { update } = require('../database/connection');
const connection = require('../database/connection');
const { create } = require('./classesController');

module.exports = {

    async list (request, response) {
        const proeficiencias = await connection('proeficiencias').select('*');

        return response.json(proeficiencias);
    },

    async create (request, response) {
        const {id_proeficiencias, nome_proeficiencia, aptidao} = request.body;

    await connection('proeficiencias').insert({
        id_proeficiencias,
        nome_proeficiencia,
        aptidao
    });

    return response.json({id_proeficiencias});
    },

    async update (request, response){
        const { id_proeficiencias } = request.params;
        const { nome_proeficiencia } = request.body;
        const { aptidao } = request.body;

    await connection('proeficiencias').where('id_proeficiencias', id_proeficiencias).update({
        nome_proeficiencia,
        aptidao
    });

    return response.json({ nome_proeficiencia, aptidao });
    },

    async delete (request, response) {
        const { id_proeficiencias } = request.params;

    await connection('proeficiencias').where('id_proeficiencias', id_proeficiencias).delete();

    return response.status(204).send();
    }
}
