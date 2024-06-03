const postgres = require('postgres');
require('dotenv').config();

// Connection details automatically pulled from environment variables
// can be manually overriden here if needed
const sql = postgres({});

const functions = {
    /**
     * Get all rows from a specified table.
     * @param {string} table - The name of the table to query.
     * @returns {Promise<Array>} - A promise that resolves to an array of rows.
     * @example
     * const users = await sql.functions.getRows('users');
     */
    async getRows(table) {
        return await sql`SELECT * FROM ${table}`;
    },

    /**
     * Get a specific row from a specified table using a selector.
     * @param {string} table - The name of the table to query.
     * @param {Object} selector - An object representing the selection criteria.
     * @returns {Promise<Object>} - A promise that resolves to a single row.
     * @example
     * const user = await sql.functions.getRow('users', { id: 1 });
     */
    async getRow(table, selector) {
        return (await sql`SELECT * FROM ${table} WHERE ${sql(selector)}`);
    },

    /**
     * Update a row in a specified table using a selector.
     * @param {string} table - The name of the table to update.
     * @param {Object} data - An object representing the data to update.
     * @param {Object} selector - An object representing the selection criteria.
     * @returns {Promise<Object>} - A promise that resolves to the result of the update operation.
     * @example
     * const result = await sql.functions.updateRow('users', { name: 'John Doe' }, { id: 1 });
     */
    async updateRow(table, data, selector) {
        return await sql`UPDATE ${table} SET ${sql(data)} WHERE ${sql(selector)}`;
    },

    /**
     * Insert a row in a specified table
     * @param {string} table
     * @param {Object} data
     * @returns {Promise<Object>}
     * @example
     * const result = await sql.functions.insertRow('users', { name: 'John Doe',  id: 1 });
     */
    async insertRow(table, data) {
        return await sql`INSERT INTO ${table} ${sql(data)}`;
    }
}

// monkey patch the pool with the functions object
// not the best practice but it works for now
sql.functions = functions;

module.exports = sql;