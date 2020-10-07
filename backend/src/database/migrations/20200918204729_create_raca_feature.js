
exports.up = function(knex) {
    return knex.schema.createTable('raca_feature', function (table) {
        table.increments('id_raca_feature').primary();
        table.string('nome_raca_feature').notNullable();
        table.string('descricao').notNullable();
  
        table.integer('raca_id').notNullable();
  
        table.foreign('raca_id').references('id_raca').inTable('raca');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('raca_feature');
  };
