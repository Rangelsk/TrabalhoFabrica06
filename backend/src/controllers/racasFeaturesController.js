const connection = require('../database/connection');

module.exports = {

    async listar (request, response) {
        const racasFeatures = await connection('raca_feature').select('*');

        return response.json(racasFeatures);
    },

    async cadastrar (request, response) {
        const { id_raca_feature, nome_raca_feature, descricao, raca_id } = request.body;

    await connection('raca_feature').insert({
        id_raca_feature,
        nome_raca_feature,
        descricao,
        raca_id
    });

    return response.json({ nome_raca_feature, descricao, raca_id });
    },

    async atualizar (request, response) {
        const { id_raca_feature } = request.params;
        const { nome_raca_feature } = request.body;
        const { descricao } = request.body;
        const { raca_id } = request.body;

    await connection('raca_feature').where('id_raca_feature', id_raca_feature).update({
        nome_raca_feature,
        descricao
    });

    return response.json({ nome_raca_feature, descricao });
    },

    async deletar (request, response) {
        const { id_raca_feature } = request.params;

    await connection('raca_feature').where('id_raca_feature', id_raca_feature).delete();

    return response.status(204).send();
    }
}
