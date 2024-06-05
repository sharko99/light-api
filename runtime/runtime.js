// This file provides a compatibility layer to support both Node and Bun runtimes

//detect if bun is runtime, if false node is assumed as the runtime
const bun = typeof Bun !== "undefined";

const bcrypt = require('bcryptjs');
const fs = require('fs').promises;


const runtime = {

    /**
     * Hashes an inputted string
     * @param {String} input 
     * @param {Number} iterations
     * @returns {Promise<String>} hashed input
     */
    async hash(input, iterations) {
        if (bun) {
            return await Bun.password.hash(input, {
                algorithm: "bcrypt",
                cost: iterations
            })
        }
        return await bcrypt.hash(input, iterations);
    },

    /**
     * Compares a given string value to a given hash 
     * @param {String} s 
     * @param {String} hash 
     * @returns {Promise<boolean>} matches
     */
    async compareHash(s, hash) {
        if (bun) {
            return await Bun.password.verify(s, hash); // Bun will automatically detect the algorithm
        }
        return await bcrypt.compare(s, hash);
    },

    /**
     * Reads in a file asynchronously as text
     * @param {String} filepath 
     * @returns {Promise<String>} file contents
     */
    async readFileString(filepath) {
        if (bun) {
            const file = Bun.file(filepath);
            return await file.text();
        }
        return await fs.readFile(filepath, 'utf-8');
    }

}

module.exports = runtime;