const express = require('express');
const router = express.Router();
const logger = require('../logger'); // Import the logger

// This request will be logged to the combined.log file

// curl -X GET http://localhost:5005/api/logger
router.get('/', (req, res) => {
    logger.info('GET /log');
    res.json({ message: 'The request has been logged in combined.log' });
});

module.exports = router;