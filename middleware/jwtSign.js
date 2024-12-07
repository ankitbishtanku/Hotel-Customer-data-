let jwt = require('jsonwebtoken');
let {secretKey} = require('../setUp/urls');

function generateToken(user_email, user_id){
    let token = jwt.sign({email: user_email, _id : user_id}, secretKey, {expiresIn: '1h'});
    return token;
};

module.exports = {generateToken};