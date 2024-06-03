const express = require('express');
const router = express.Router();
const userHandler = require('../classes/userHandler');

/*
    curl -X POST http://localhost:3000/users/register \
    -H "Content-Type: application/json" \
    -d '{
        "username": "testuser",
        "password": "testpassword"
    }'
*/
router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        await userHandler.registerUser(username, password);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/*
    curl -X POST http://localhost:3000/users/login \
    -H "Content-Type: application/json" \
    -d '{
        "username": "testuser",
        "password": "testpassword"
    }'
*/
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const { token } = await userHandler.loginUser(username, password);
        res.json({ token });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});

module.exports = router;
