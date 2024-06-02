const express = require('express');
const app = express();

// Classes import
const db = require('./classes/db');

// Routes import
const userRoutes = require('./routes/users');
const routes = require('./routes');

// Middlewares
const authenticate = require('./middlewares/authenticate');

// Application
app.use(express.json());

// Root url
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'operational',
        message: 'Light API - Lightweight Express Boilerplate',
        features: [
            '🔄 Routes handling',
            '🔐 User authentication with JWT',
            '💾 MySQL2 basic functions',
            '🔧 Configuration with DotEnv',
            '🛡️ Middleware ready',
            '🚀 Works out of the box!'
        ]
    });
});

// Nested routes
app.use('/api/users', userRoutes);
app.use('/api', authenticate, routes); // '/api' routes are protected with the 'authenticate' middleware

// Root routes
// curl -X GET http://localhost:5000/welcome
app.get('/welcome', (req, res) => {
    res.json({ message: 'Welcome' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
