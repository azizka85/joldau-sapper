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

  let categoriesQuery = knex('category')
    .select('id', 'name', 'title', 'description', 'answersCount', 'createdAt')
    .where({
      language,
      parentId: null
    })
    .orderBy('createdAt', 'desc');

  // Filters for category
  if(req.query['categoryTitle']) {
    categoriesQuery = categoriesQuery.andWhere('title', 'like', `%${req.query['categoryTitle']}%`);
  }

  if(req.query['description']) {
    categoriesQuery = categoriesQuery.andWhere('description', 'like', `%${req.query['description']}%`);
  }    

  if(req.query['answersCountFrom']) {
    categoriesQuery = categoriesQuery.andWhere('answersCount', '>=', Number.parseInt(req.query['answersCountFrom'] as string));
  }

  if(req.query['answersCountTo']) {
    categoriesQuery = categoriesQuery.andWhere('answersCount', '<=', Number.parseInt(req.query['answersCountTo'] as string));
  }

  if(req.query['createdAtFrom']) {
    categoriesQuery = categoriesQuery.andWhere('createdAt', '>=', new Date(Number.parseInt(req.query['createdAtFrom'] as string)));
  }

  if(req.query['createdAtTo']) {
    categoriesQuery = categoriesQuery.andWhere('createdAt', '<=', new Date(Number.parseInt(req.query['createdAtTo'] as string)));
  }  

  const resultCategories = await categoriesQuery;

  let answersQuery = knex({'a': 'answer'})
    .select('a.id', 'a.name', 'c.path', 'a.title', 'a.categoryId', 'a.updatedAt')
    .join({'c': 'category'}, 'c.id', 'a.categoryId')
    .whereIn('categoryId', function() {
      this.select('id').from('category').where({ language })
    })
    .orderBy('a.updatedAt', "desc")
    .limit(10);

  // Filters for answers
  if(req.query['contentTitle']) {
    answersQuery = answersQuery.andWhere('a.title', 'like', `%${req.query['contentTitle']}%`);
  }

  if(req.query['content']) {
    answersQuery = answersQuery.andWhere('content', 'like', `%${req.query['content']}%`);
  }

  if(req.query['updatedAtFrom']) {
    answersQuery = answersQuery.andWhere('updatedAt', '>=', new Date(Number.parseInt(req.query['updatedAtFrom'] as string)));
  }

  if(req.query['updatedAtTo']) {
    answersQuery = answersQuery.andWhere('updatedAt', '<=', new Date(Number.parseInt(req.query['updatedAtTo'] as string)));
  }

  const resultAnswers = await answersQuery;    

  const data = {
    answersCount: resultCnt.cnt,
    categories: resultCategories,
    answers: resultAnswers
  } as Category;

  res.end(JSON.stringify({...data}));    
}
