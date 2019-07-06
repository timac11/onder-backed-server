const { Pool } = require('pg');
const dbConfig = require('./db_config');

const executeQuery = async (query, params) => {
    // TODO refactor this code and add function for getting connection
    const pool = new Pool(dbConfig);
    const { rows } = await pool.query(query, params);
    await pool.end();
    return rows;
};

module.exports = {
    executeQuery
};