const express = require('express');
const router = express.Router();
const sql = require('../db/db');

// Routes in this files are protected with the authenticate middleware

/*
    curl -X GET http://localhost:5005/api/protected \
    -H "Authorization: Bearer <token>"
*/

router.get('/protected', (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

/*
    curl -X GET http://localhost:5005/api/rows/users \
    -H "Authorization: Bearer <token>"
*/
router.get('/rows/:table', async (req, res) => {
    try {
        const rows = await sql.functions.getRows(req.params.table);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/*
    curl -X GET http://localhost:5005/api/row/users?id=1
    -H "Authorization: Bearer <token>"
*/
router.get('/row/:table', async (req, res) => {
    try {
        const selector = req.query;
        const row = await sql.functions.getRow(req.params.table, selector);
        res.json(row);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/*
    curl -X PUT http://localhost:5005/api/row/users \
    -H "Content-Type: application/json" \
    -d '{"data": {"username": "John Doe"}, "selector": {"id": 1}}'
    -H "Authorization Bearer <token>"
*/
router.put('/row/:table', async (req, res) => {
    try {
        const data = req.body.data;
        const selector = req.body.selector;
        const result = await sql.functions.updateRow(req.params.table, data, selector);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;