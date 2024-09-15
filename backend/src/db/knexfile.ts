import knex from "knex";

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'admin123!@#',
    database: 'samcommerce' 
  }
});

export default db;
