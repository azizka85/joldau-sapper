import type { Request } from 'polka';
import type { ServerResponse } from 'http';
import knex from '../../db/knex';
import type { Category } from '../../globals';

export async function get(req: Request, res: ServerResponse, next: () => void) {
  const language = req.params.lang;

  const resultCnt = await knex('answer')
    .count('*', {as: 'cnt'})
    .whereIn('categoryId', function() {
      this.select('id').from('category').where({ language })
    })
    .first();

  const resultCategories = await knex('category')
    .select('id', 'name', 'title', 'description', 'answersCount', 'createdAt')
    .where({
      language,
      parentId: null
    })
    .orderBy('createdAt', 'desc');

  const resultAnswers = await knex({'a': 'answer'})
    .select('a.id', 'a.name', 'c.path', 'a.title', 'a.categoryId', 'a.updatedAt')
    .join({'c': 'category'}, 'c.id', 'a.categoryId')
    .whereIn('categoryId', function() {
      this.select('id').from('category').where({ language })
    })
    .orderBy('a.updatedAt', "desc")
    .limit(10);

  const data = {
    answersCount: resultCnt.cnt,
    categories: resultCategories,
    answers: resultAnswers
  } as Category;

  res.end(JSON.stringify({...data}));    
}
