const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.config')

const authenticateToken = function (req, res, next) {
    let token = req.cookies['access-token'];
    if (!token) {
        return res.status(403).send({
            msg: 'No token provided ! Please login or signup !'
        })
    }   
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                msg: 'Unauthorized'
            })
        }
        req.userId = decoded.userId
        next()
    })
};

module.exports = authenticateToken;
// const jwt = require('jsonwebtoken');
// const authConfig = require('../config/auth.config')

// function authenticateToken(req, res, next) {
//     const token = req.headers['authorization'];
//     if (!token) {
//         return res.status(401).json({ success: false, message: 'Token is required' });
//     }

//     jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
//         if (err) {
//             return res.status(403).json({ success: false, message: 'Invalid token' });
//         }
//         req.user = decoded;
//         next();
//     });
// }

// module.exports = authenticateToken;
