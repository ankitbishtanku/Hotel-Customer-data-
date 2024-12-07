let jwt = require('jsonwebtoken');
let {secretKey} = require('../setUp/urls');

var valid = function(req, res, next){
    let token = req.headers.authorization;
    jwt.verify(token, secretKey, (err, decoded) => {
        if(err){
            return res.status(401).json({message : "Invalid token"});
        }
        else{
            req.user = decoded;
            return next();
        }
    });
}

module.exports = {valid};