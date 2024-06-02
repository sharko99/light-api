const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('./db');
require('dotenv').config();

class UserHandler {
    constructor() {
        this.jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';
        this.saltRounds = 10;
    }

    async registerUser(username, password) {
        const hashedPassword = await bcrypt.hash(password, this.saltRounds);
        const result = await db.pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
        return result;
    }

    async loginUser(username, password) {
        const [rows] = await db.pool.query('SELECT * FROM users WHERE username = ?', [username]);
        if (rows.length === 0) throw new Error('User not found');

        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error('Invalid credentials');

        const token = jwt.sign({ id: user.id, username: user.username }, this.jwtSecret, { expiresIn: '1h' });
        return { token };
    }

    verifyToken(token) {
        try {
            const decoded = jwt.verify(token, this.jwtSecret);
            return decoded;
        } catch (err) {
            throw new Error('Invalid token');
        }
    }
}

module.exports = new UserHandler();