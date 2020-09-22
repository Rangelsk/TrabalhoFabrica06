
exports.up = function(knex) {
  return knex.schema.createTable('classe', function (table){
      table.increments('id_classe').primary();
      table.string('nome_classe').notNullable();
      table.integer('vida_classe').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('classe');
};
