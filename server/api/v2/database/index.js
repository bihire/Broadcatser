import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
    console.log('Connected to database succesfully');
});

/**
 * Create User Tables
 */
const createUserTables = () => {
    const queryText = `DROP TABLE IF EXISTS users; CREATE TABLE
    users(
      id SERIAL,
      first_name VARCHAR(128) NOT NULL,
      last_name VARCHAR(128) NOT NULL,
      email VARCHAR(128) UNIQUE NOT NULL,
      password VARCHAR(128) NOT NULL,
      phone_number VARCHAR(25) NOT NULL,
      is_admin BOOLEAN NOT NULL
    )`;
    pool
        .query(queryText)
        .then(res => {
            console.log(res);
            pool.end();
        })
        .catch(err => {
            console.log(err);
            pool.end();
        });
};

pool.on('remove', () => {
    console.log('client removed');
    process.exit(0);
});

const createTables = () => {
    createUserTables();
};
module.exports = createTables;

require('make-runnable');