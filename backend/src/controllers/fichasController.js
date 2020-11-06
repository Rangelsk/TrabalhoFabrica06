const { update } = require('../database/connection');
const connection = require('../database/connection');

module.exports = {

    async listar (request, response) {
        const fichas = await connection('ficha').select('*');

        return response.json(fichas);
    },

    async cadastrar (request, response) {
        const { id_ficha, id_raca_ficha, id_classe_ficha, nomePersonagem, xp, antecedente,
        vida_maxima, id_bonus_proeficiencia, classe_armadura, forca, destreza, constituicao,
        inteligencia, sabedoria, carisma, id_proeficiencias_ficha} = request.body;

    await connection('ficha').insert({
        id_ficha,
        id_raca_ficha,
        id_classe_ficha,
        nomePersonagem,
        xp,
        antecedente,
        vida_maxima,
        id_bonus_proeficiencia,
        classe_armadura,
        forca,
        destreza,
        constituicao,
        inteligencia,
        sabedoria,
        carisma,
        id_proeficiencias_ficha
    });

    return response.json({ id_ficha, id_raca_ficha, id_classe_ficha, nomePersonagem, xp, antecedente,
        vida_maxima, id_bonus_proeficiencia, classe_armadura, forca, destreza, constituicao,
        inteligencia, sabedoria, carisma, id_proeficiencias_ficha });
    },

    async atualizar (request, response) {
        const { id_ficha } = request.params;
        const { id_raca_ficha } = request.body;
        const { id_classe_ficha } = request.body;
        const { nomePersonagem } = request.body;
        const { xp } = request.body;
        const { antecedente } = request.body;
        const { vida_maxima } = request.body;
        const { id_bonus_proeficiencia } = request.body;
        const { classe_armadura } = request.body;
        const { forca } = request.body;
        const { destreza } = request.body;
        const { constituicao } = request.body;
        const { inteligencia } = request.body;
        const { sabedoria } = request.body;
        const { carisma } = request.body;
        const { id_proeficiencias_ficha } = request.body;

    await connection('ficha').where('id_ficha', id_ficha).update({
        nomePersonagem,
        xp,
        antecedente,
        vida_maxima,
        classe_armadura,
        forca,
        destreza,
        constituicao,
        inteligencia,
        sabedoria,
        carisma
    });

    return response.json({ nomePersonagem, xp, antecedente, vida_maxima, classe_armadura, forca,
    destreza, constituicao, inteligencia, sabedoria, carisma });
    },

    async deletar(request, response) {
        const { id_ficha } = request.params;

    await connection('ficha').where('id_ficha', id_ficha).delete();

    return response.status(204).send();
    }
}
