const { Pool } = require("pg");
const { postgresConfig } = require("./config");

const pool = new Pool(postgresConfig);

module.exports = pool;
