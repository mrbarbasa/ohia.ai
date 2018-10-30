const knex = require('knex');

exports.up = () => {
  knex.schema.createTable('plants', (table) => {
    table.increments('id').primary();

    table.string('genus');
    table.string('species');
    table.string('common_name');
    table.string('hawaiian_name');
    table.text('story');
    table.text('use');
    table.enu('endangered',
    [
      'critically endangered',
      'endangered',
      'vulnerable',
    ]);

    table.timestamps();
  });
};

exports.down = (knex) => {
  return knex.schema
    .dropTable('plants')
};