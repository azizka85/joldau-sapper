import type { Request } from 'polka';
import type { ServerResponse } from 'http';
import knex from '../../../db/knex';
import { generateMD5Hash } from "../../../db/utils";
import { Session, UserRole } from '../../../globals';

export async function post(req: Request, res: ServerResponse, next: () => void) { 
  const { name, email, password } = (req as any).body;

  const resultUser = await knex('user')
    .select('id')
    .where({
      email
    })
    .first();

  if(resultUser) {
    res.statusCode = 400;
    res.end(JSON.stringify({
      code: 1
    }));
  } else {
    const createdAt = new Date();
    const token = generateMD5Hash(`${email}-${password}-${createdAt}`);

    const user = {
      email,
      password: generateMD5Hash(password),
      name,
      role: UserRole.user,
      createdAt,
      updatedAt: createdAt
    };

    const insertUserResult = await knex('user').insert(user).returning('id');
    await knex('session').insert({token, userId: insertUserResult[0]})

    const data = {
      token, 
      user: {
        name, email, 
        role: UserRole.user,        
        createdAt: createdAt,
        updatedAt: createdAt 
      },
      createdAt: createdAt
    };

    res.statusCode = 201;
    res.end(JSON.stringify(data));    
  }
}
