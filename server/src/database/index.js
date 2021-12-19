const { Client } = require('pg');

const client = new Client({
  host: process.env.HOST,
  port: 5432,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
