import knex from './knex';
import type { Category } from '../globals';

export async function parentCategories(language: string, pathArray: string[]): Promise<Category[]> {
  const result: Category[] = [];

  while(pathArray.length > 0) {
    const path = pathArray.join('/');

    const resultCategory = await knex('category')
      .select('id', 'name', 'path', 'title')
      .where({
        language,
        path
      })
      .first();

    result.push({...resultCategory});

    pathArray.pop();
  }

  return result.reverse();
}
