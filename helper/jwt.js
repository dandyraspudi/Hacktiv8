const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.SECRETKEY;


function sign(payload) {
    return jwt.sign(payload, JWT_SECRET);
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
}

module.exports = {
    sign,
    verifyToken
}