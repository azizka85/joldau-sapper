import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('user', function(table) {
    table.increments();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('name').notNullable();    
    table.string('role').notNullable();
    table.text('image');
    table.timestamp('createdAt').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updatedAt').defaultTo(knex.fn.now()).notNullable();
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('user');
}

