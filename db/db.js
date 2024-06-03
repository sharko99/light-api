//reads env vars and decides which database to use

const sql = process.env.DBTYPE === 'postgres' ? require('./postgres') : require('./mysql');

module.exports = sql;