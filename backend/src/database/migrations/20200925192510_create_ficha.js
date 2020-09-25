
exports.up = function(knex) {
  return knex.schema.createTable('ficha', function (table){
    table.increments('id_ficha').primary();
    table.integer('id_raca_ficha').notNullable();
    table.integer('id_classe_ficha').notNullable();
    table.string('nomePersonagem').notNullable();
    table.integer('xp').notNullable();
    table.integer('antecedente').notNullable();
    table.integer('vida_maxima').notNullable();
    table.integer('id_bonus_proeficiencia').notNullable();
    table.integer('classe_armadura').notNullable();
    table.integer('forca').notNullable();
    table.integer('destreza').notNullable();
    table.integer('constituicao').notNullable();
    table.integer('inteligencia').notNullable();
    table.integer('sabedoria').notNullable();
    table.integer('carisma').notNullable();
    table.integer('id_proeficiencias_ficha').notNullable();

    table.foreign('id_raca_ficha').references('id_raca').inTable('raca');
    table.foreign('id_classe_ficha').references('id_classe').inTable('classe');
    table.foreign('id_proeficiencias_ficha').references('id_proeficiencias').inTable('proeficiencias');
  });
};

exports.down = function(knex) {
  return knex.schema.droptTable('ficha');
};
