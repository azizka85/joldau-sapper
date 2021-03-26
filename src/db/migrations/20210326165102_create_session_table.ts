import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('session', function(table) {
    table.increments();
    table.string('token').notNullable();
    table.integer('userId').notNullable().unsigned().references('id').inTable('user').onDelete('CASCADE');
    table.timestamp('createdAt').defaultTo(knex.fn.now()).notNullable();
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('session');
}

