const mysql = require('mysql2/promise');
require('dotenv').config();

/**
 * Database class to handle MySQL database operations.
 */
class Database {
    constructor() {
        this.pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });
    }

    /**
     * Get all rows from a specified table.
     * @param {string} table - The name of the table to query.
     * @returns {Promise<Array>} - A promise that resolves to an array of rows.
     * @example
     * const users = await db.getRows('users');
     */
    async getRows(table) {
        const [rows] = await this.pool.query(`SELECT * FROM ${table}`);
        return rows;
    }

    /**
     * Get a specific row from a specified table using a selector.
     * @param {string} table - The name of the table to query.
     * @param {Object} selector - An object representing the selection criteria.
     * @returns {Promise<Object>} - A promise that resolves to a single row.
     * @example
     * const user = await db.getRow('users', { id: 1 });
     */
    async getRow(table, selector) {
        const [rows] = await this.pool.query(`SELECT * FROM ${table} WHERE ?`, selector);
        return rows[0];
    }

    /**
     * Update a row in a specified table using a selector.
     * @param {string} table - The name of the table to update.
     * @param {Object} data - An object representing the data to update.
     * @param {Object} selector - An object representing the selection criteria.
     * @returns {Promise<Object>} - A promise that resolves to the result of the update operation.
     * @example
     * const result = await db.updateRow('users', { name: 'John Doe' }, { id: 1 });
     */
    async updateRow(table, data, selector) {
        const [result] = await this.pool.query(`UPDATE ${table} SET ? WHERE ?`, [data, selector]);
        return result;
    }
}

module.exports = new Database();