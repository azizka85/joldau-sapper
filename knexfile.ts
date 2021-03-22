// Update with your config settings.

const BASE_PATH = process.cwd();

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: BASE_PATH + '/db.sqlite3'
    },
    migrations: {
      directory: BASE_PATH + '/src/db/migrations'
    },
    seeds: {
      directory: BASE_PATH + '/src/db/seeds'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'sqlite3',
    connection: {
      filename: BASE_PATH + '/db.sqlite3'
    },
    migrations: {
      directory: BASE_PATH + '/src/db/migrations'
    },
    seeds: {
      directory: BASE_PATH + '/src/db/seeds'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: BASE_PATH + '/db.sqlite3'
    },
    migrations: {
      directory: BASE_PATH + '/src/db/migrations'
    },
    seeds: {
      directory: BASE_PATH + '/src/db/seeds'
    },
    useNullAsDefault: true
  }

};
