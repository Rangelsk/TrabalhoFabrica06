
exports.up = function(knex) {
  return knex.schema.createTable('raca', function (table){
      table.increments('id_raca').primary();
      table.string('nome_raca').notNullable();
      table.decimal('deslocamento').notNullable();
  });
};

exports.down = function(knex) {
  knex.schema.dropTable('raca');
};
