require('dotenv').config();

module.exports = {
  client: 'mysql2',
  connection: {
    ... (['sqlite3', 'better-sqlite3'].includes(process.env.DB_CONNECTION)
      ? {
        filename: process.env.DB_DATABASE,
      }
      : {
        host : process.env.DB_HOST,
        port : process.env.DB_PORT,
        user : process.env.DB_USERNAME,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_DATABASE
      }
    ),
  },
  migrations: {
    table: 'migrations',
    path: './database/migrations',
  },
  models: {
    path: './models'
  }
};
