
exports.up = function(knex) {
  return knex.schema.createTable('proeficiencias', function (table){
      table.increments('id_proeficiencias').primary();
      table.string('nome_proeficiencia').notNullable();
      table.integer('aptidao').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('proeficiencias');
};
