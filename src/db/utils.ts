import { createHash } from 'crypto';
import knex from './knex';
import type { Category } from '../globals';

export function generateMD5Hash(text: string): string {
  return createHash('md5').update(text).digest('base64');
}

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
