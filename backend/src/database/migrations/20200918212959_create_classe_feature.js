
exports.up = function(knex) {
  return knex.schema.createTable('classe_feature', function (table) {
    table.increments('id_classe_feature').primary();
    table.string('nome_classe_feature').notNullable();
    table.string('descricao_classe_feature').notNullable();

    table.integer('classe_id');

    table.foreign('classe_id').references('id_classe').inTable('raca');
  });
};

exports.down = function(knex) {
  
};
