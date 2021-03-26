import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('answer', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.text('title').notNullable();
    table.text('content');
    table.timestamp('createdAt').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updatedAt').defaultTo(knex.fn.now()).notNullable();
    table.integer('categoryId').unsigned().references('id').inTable('category').onDelete('CASCADE');
    table.integer('userId').notNullable().unsigned().references('id').inTable('user').onDelete('CASCADE');
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('answer');
}

