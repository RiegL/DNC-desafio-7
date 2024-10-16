/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('aluno', (table) => {
    table.bigIncrements('id').primary();
    table.string('nome');
    table.string('cpf', 11); // Alterado para string com tamanho adequado
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('aluno');
};
