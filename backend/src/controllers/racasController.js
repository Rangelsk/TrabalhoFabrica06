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
    }
}
