import Knex from "knex";

const BASE_PATH = process.cwd();

const configs = require(BASE_PATH + '/knexfile.ts');

const environment = process.env.NODE_ENV || 'development';

const config = configs[environment];

export default Knex(config);
