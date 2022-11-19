import * as mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config({ path: './.env'});

export const db = mysql.createConnection({
  host: "localhost",
  port: process.env.DB_PORT,
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "social"
})