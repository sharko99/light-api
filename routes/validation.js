const express = require('express');
const router = express.Router();
const Joi = require('joi');

const userSchema = Joi.object({
    username: Joi.string().min(6).required(),
});

// curl -X POST http://localhost:5005/validation/username
router.post('/username', (req, res) => {
    const { error } = userSchema.validate(req.body); // req.body structure: { username: 'john' }
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    res.json({ message: 'Username is valid' });
});

module.exports = router;
