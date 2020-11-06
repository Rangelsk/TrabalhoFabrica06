const connection = require('../database/connection');

module.exports = {

    async listar (request, response) {
        const proeficiencias = await connection('proeficiencias').select('*');

        return response.json(proeficiencias);
    },

    async cadastrar (request, response) {
        const {id_proeficiencias, nome_proeficiencia, aptidao} = request.body;

    await connection('proeficiencias').insert({
        id_proeficiencias,
        nome_proeficiencia,
        aptidao
    });

    return response.json({id_proeficiencias});
    },

    async atualizar (request, response){
        const { id_proeficiencias } = request.params;
        const { nome_proeficiencia } = request.body;
        const { aptidao } = request.body;

    await connection('proeficiencias').where('id_proeficiencias', id_proeficiencias).update({
        nome_proeficiencia,
        aptidao
    });

    return response.json({ nome_proeficiencia, aptidao });
    },

    async deletar (request, response) {
        const { id_proeficiencias } = request.params;

    await connection('proeficiencias').where('id_proeficiencias', id_proeficiencias).delete();

    return response.status(204).send();
    }
}
