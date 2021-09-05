const bcrypt = require('bcryptjs');

function encode(pass) {
    const salt = bcrypt.genSaltSync(8);
    return bcrypt.hashSync(pass, salt);
}

function decode(pass, hashPass) {
    return bcrypt.compareSync(pass, hashPass);
}

module.exports = { 
    encode,
    decode
}