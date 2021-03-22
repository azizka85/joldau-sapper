import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('category', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.string('path').notNullable();
    table.text('title').notNullable();
    table.text('description');
    table.string('language', 10).notNullable();
    table.integer('answersCount').unsigned();
    table.timestamp('createdAt').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updatedAt').defaultTo(knex.fn.now()).notNullable();
    table.integer('parentId').unsigned().references('id').inTable('category').onDelete('CASCADE');
  });  
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('category');
}

