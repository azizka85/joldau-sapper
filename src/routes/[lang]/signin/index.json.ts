import type { Request } from 'polka';
import type { ServerResponse } from 'http';
import knex from '../../../db/knex';
import { generateMD5Hash } from "../../../db/utils";
import type { Session } from '../../../globals';

export async function post(req: Request, res: ServerResponse, next: () => void) { 
  const { email, password } = (req as any).body;

  const resultUser = await knex('user')
    .select('id', 'name', 'email', 'role', 'image', 'createdAt', 'updatedAt')
    .where({
      email,
      password: generateMD5Hash(password)
    })
    .first();
    
  if(resultUser) {
    const createdAt = new Date();
    const token = generateMD5Hash(`${email}-${password}-${createdAt}`);

    await knex('session').insert({token, userId: resultUser.id})

    const data = {
      token, 
      user: {
        name: resultUser.name,
        email: resultUser.email,
        role: resultUser.role,
        image: resultUser.image,
        createdAt: resultUser.createdAt,
        updatedAt: resultUser.updatedAt 
      },
      createdAt: createdAt
    };

    res.statusCode = 201;
    res.end(JSON.stringify(data));
  } else {
    res.statusCode = 400;
    res.end(JSON.stringify({
      code: 1
    }));
  }  
}
