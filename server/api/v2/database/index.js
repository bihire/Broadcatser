import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    connectionString: process.env.HEROKU_POSTGRESQL_JADE_URL
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

/**
 * Create Red-flag/Intervention Tables
 */
const createRedFlagTables = () => {
    const queryText = `DROP TABLE IF EXISTS flags; CREATE TABLE
    flags(
      id SERIAL,
      title VARCHAR(250) NOT NULL,
      type VARCHAR(128) NOT NULL,
      status VARCHAR(128) NOT NULL,
      comment TEXT NOT NULL,
      location TEXT NOT NULL,
      created_by INTEGER NOT NULL,
      labels TEXT[] NOT NULL,
      images TEXT[] NOT NULL,
      videos TEXT[] NOT NULL,
      created_on DATE
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
    createRedFlagTables();
};
module.exports = createTables;

require('make-runnable');