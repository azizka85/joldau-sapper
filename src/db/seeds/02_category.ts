import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex("category").del();

	// Inserts seed entries
	await knex("category").insert([
		{
			id: 1,
			name: 'transfer',
			path: 'transfer',
			title: 'Перевод из другого ВУЗа',
			description: 'Здесь приводятся ответы на вопросы, касательно перевода из другого ВУЗа',
			language: 'ru',
			answersCount: 1,
			parentId: null,
			userId: 1
		},
		{
			id: 2,
			name: 'expulsion',
			path: 'expulsion',
			title: 'Отчисление из ВУЗа',
			description: 'Здесь приводятся ответы на вопросы, касательно отчисления из ВУЗа',
			language: 'ru',
			answersCount: 1,
			parentId: null,
			userId: 1
		},
		{
			id: 3,
			name: 'academic-leave',
			path: 'academic-leave',
			title: 'Академический отпуск',
			description: 'Здесь приводятся ответы на вопросы, касательно получения академического отпуска либо выхода из него',
			language: 'ru',
			answersCount: 1,
			parentId: null,
			userId: 1
		},
		{
			id: 4,
			name: 'academic-mobility',
			path: 'academic-mobility',
			title: 'Академическая мобильность',
			description: 'Здесь приводятся ответы на вопросы, касательно оформления документов на академическую мобильность',
			language: 'ru',
			answersCount: 1,
			parentId: null,
			userId: 1
		},
		{
			id: 5,
			name: 'transfer',
			path: 'transfer',
			title: 'Басқа ЖОО-ға өту',
			description: 'Басқа ЖОО-ға өту туралы сұрақтарға жауаптар берілген осы жерде',
			language: 'kk',
			answersCount: 1,
			parentId: null,
			userId: 1
		},
		{
			id: 6,
			name: 'expulsion',
			path: 'expulsion',
			title: 'ЖОО-дан шығып кету',
			description: 'ЖОО-дан шығып кету туралы сұрақтарға жауаптар берілген осы жерде',
			language: 'kk',
			answersCount: 0,
			parentId: null,
			userId: 1
		},
		{
			id: 7,
			name: 'academic-leave',
			path: 'academic-leave',
			title: 'Академиялық демалыс',
			description: 'Академиялық демалыс туралы сұрақтарға жауаптар берілген осы жерде',
			language: 'kk',
			answersCount: 0,
			parentId: null,
			userId: 1
		},
		{
			id: 8,
			name: 'transfer',
			path: 'transfer',
			title: 'Transfer from other university',
			description: 'Here, you can find answers about transfer from other universities to Satbayev University',
			language: 'en',
			answersCount: 1,
			parentId: null,
			userId: 1
		},					
	]);
}
