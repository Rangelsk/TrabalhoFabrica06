const connection = require('../database/connection');

module.exports = {

    async list (request, response) {
        const classes = await connection('classe').select('*');

        return response.json(classes);
    },

    async create(request, response) {
        const { id_classe, nome_classe, vida_classe } = request.body;

    await connection('classe').insert({
        id_classe,
        nome_classe,
        vida_classe
    });    

    return response.json({ id_classe });
    },

    async update (request, response){
        const { id_classe } = request.params;
        const { nome_classe } = request.body;
        const { vida_classe } = request.body;

    await connection('classe').where('id_classe', id_classe).update({
        nome_classe,
        vida_classe
    });

    return response.json({ nome_classe, vida_classe });
    },

    async delete(request, response) {
        const { id_classe } = request.params;

    await connection('classe').where('id_classe', id_classe).delete();
    
    return response.status(204).send();
    }
}
