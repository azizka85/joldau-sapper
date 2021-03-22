import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex("answer").del();

	// Inserts seed entries
	await knex("answer").insert([
		{
			id: 1,
			name: 'technical',
			title: 'Перевод из Технического Университета в Satbayev University',
			content: `
				<p>При переводе из других Технических Университетов в Satbayev University, необходимо сдать разницу.</p>
				<p>Список предметов указаны в файле: </p>
				<p><a href="#">Список предметов</a></p>
			`,
			categoryId: 1
		},
		{
			id: 2,
			name: 'transfer',
			title: 'Отчисление из Satbayev University для перевода в другой ВУЗ',
			content: `
				<p>Необходимо заполнить обходной лист.</p>
				<p>Обходной лист указан в файле: </p>
				<p><a href="#">Обходной лист</a></p>
			`,
			categoryId: 2
		},
		{
			id: 3, 
			name: 'compete',
			title: 'Уход в академический отпуск из-за участия в соревнованиях',
			content: `
				<p>Необходимо написать заявление на имя проректора по учебной работе.</p>
				<p>Шаблон заявления указан в файле: </p>
				<p><a href="#">Шаблон заявления</a></p>
			`,
			categoryId: 3
		},
		{
			id: 4,
			name: 'foreign',
			title: 'Академическая мобильность в зарубежные ВУЗы',
			content: `
				<p>Необходимо написать заявление на имя проректора по учебной работе.</p>
				<p>Шаблон заявления указан в файле: </p>
				<p><a href="#">Шаблон заявления</a></p>
			`,
			categoryId: 4
		},
		{
			id: 5,
			name: 'technical',
			title: 'Техникалық Университеттен Satbayev University-ге ауысу',
			content: `
				<p>Оқу проректорге хат жазу керек.</p>
				<p>Хаттын шаблоны мына жерден алса болады: </p>
				<p><a href="#">Хаттын шаблоны</a></p>
			`,
			categoryId: 5
		},
		{
			id: 6,
			name: 'technical',
			title: 'Transfer from other technical university to Satbayev University',
			content: `
				<p>Need to write request to vice rector of Satbayev University.</p>
				<p>Template of this request you can find here: </p>
				<p><a href="#">Template</a></p>
			`,
			categoryId: 8
		}		
	]);
};
