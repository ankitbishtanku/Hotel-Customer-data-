const {validate, ValidationError, Joi} = require('express-validation');

const userValidation = {
    body : Joi.object({
        name : Joi.string().required(),
        email : Joi.string().email().required(),
        password : Joi.string().regex(/^[a-zA-Z0-9]{6}/).required(),
    }),
};

module.exports = {userValidation};