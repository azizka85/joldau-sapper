import type { Request } from 'polka';
import type { ServerResponse } from 'http';
import knex from '../../../db/knex';
import type { Answer } from '../../../globals';
import { parentCategories } from '../../../db/utils';

export async function get(req: Request, res: ServerResponse, next: () => void) {
  const params: any = req.params;
  const language = params.lang;
  const path = params.path as string[];
  const name = path.pop();
  const category = path.join('/');
  const parents = await parentCategories(language, path);

  const resultAnswer = await knex({'a': 'answer'})
  .select('a.id', 'a.name', 'c.path', 'a.title', 'a.content', 'a.categoryId', 'a.updatedAt')
  .join({'c': 'category'}, 'c.id', 'a.categoryId')
  .where({
    'c.language': language,
    'c.path': category,
    'a.name': name
  })
  .first();

  const data = {
    parents,
    ...resultAnswer
  } as Answer;

  res.end(JSON.stringify(data));
}
