import type { Knex } from "knex";
import { UserRole } from '../../globals';
import { generateMD5Hash } from "../utils";

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex("user").del();

	// Inserts seed entries
	await knex("user").insert([
		{
			id: 1,
			password: generateMD5Hash('lock'),
			name: 'Aziz Kudaikulov',
			email: 'aziz.kudaikulov@mail.ru',
			role: UserRole.admin,
			image: 'https://docs.google.com/uc?id=1PgAGg8e_zVUG32RM7_BYyoDxZt8YsDfy'			
		}			
	]);
};
