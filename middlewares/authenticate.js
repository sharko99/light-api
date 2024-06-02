const jwt = require('jsonwebtoken');
require('dotenv').config();

/**
 * Middleware to authenticate the user using it's JWT token
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret', (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports = authenticate;