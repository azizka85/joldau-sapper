import type { Request } from 'polka';
import type { ServerResponse } from 'http';
import knex from '../../../db/knex';
import type { Category } from '../../../globals';
import { parentCategories } from '../../../db/utils';

export async function get(req: Request, res: ServerResponse, next: () => void) {
  const params: any = req.params;
  const language = params.lang;
  const pathArray = params.path as string[];
  const path = pathArray.join('/');

  pathArray.pop();

  const parents = await parentCategories(language, pathArray);

  const resultCategory = await knex('category')
    .select('id', 'name', 'path', 'title', 'description', 'answersCount', 'createdAt')
    .where({
      language,
      path
    })
    .first();

  const resultCategories = await knex('category')
    .select('id', 'name', 'path', 'title', 'description', 'answersCount', 'createdAt')
    .where({
      language,
      parentId: resultCategory.id
    })
    .orderBy('createdAt', 'desc');  

  const resultAnswers = await knex({'a': 'answer'})
    .select('a.id', 'a.name', 'c.path', 'a.title', 'a.content', 'a.categoryId', 'a.updatedAt')
    .join({'c': 'category'}, 'c.id', 'a.categoryId')
    .where({
      categoryId: resultCategory.id
    })
    .orderBy('a.updatedAt', "desc");

  const data = {
    parents,
    ...resultCategory,
    categories: resultCategories,
    answers: resultAnswers
  } as Category;

  res.end(JSON.stringify({...data}));
}
