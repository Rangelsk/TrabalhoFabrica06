const connection = require('../database/connection');
const { cadastrar, atualizar } = require('./fichasController');

module.exports = {

    async listar (request, response) {
        const classesFeatures = await connection('classe_feature').select('*');

        return response.json(classesFeatures);
    },

    async cadastrar (request, response) {
        const { id_classe_feature, nome_classe_feature, descricao_classe_feature, classe_id} = request.body;

    await connection('classe_feature').insert({
        id_classe_feature,
        nome_classe_feature,
        descricao_classe_feature,
        classe_id
    });
    
    return response.json({ nome_classe_feature, descricao_classe_feature, classe_id });
    },

    async atualizar (request, response) {
        const { id_classe_feature } = request.params;
        const { nome_classe_feature } = request.body;
        const { descricao_classe_feature } = request.body;
        const { classe_id } = request.body;

    await connection('classe_Feature').where('id_classe_feature', id_classe_feature).update({
        nome_classe_feature,
        descricao_classe_feature
    });

    return response.json({ nome_classe_feature, descricao_classe_feature });
    },

    async deletar (request, response) {
        const { id_classe_feature } = request.params;

    await connection('classe_Feature').where('id_classe_feature', id_classe_feature).delete();
    
    return response.status(204).send();
    }
}
