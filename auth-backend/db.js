// from GPT; edit once connected to Render

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DB_URL,
});

module.exports = pool;