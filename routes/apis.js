const express = require('express');
const {validate, ValidationError, Joi} = require('express-validation');
const {userValidation} = require('../middleware/validation');
const {valid} = require('../middleware/jwtVerify');
const {register} = require('../controller/register');
const {logIn} = require('../controller/login');
const {getRoom} = require('../controller/room');
const {getInfo} = require('../controller/roomQuery');
const {getCheckOut} = require('../controller/checkOut');
const {getHistory} = require('../controller/review');



const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended : true}));


router.get('/', (req, res, next) => {
    res.send('this is for just testing');
});

// User Registration Route
router.post('/register', validate(userValidation, {}, {}), register)

// logIn for user
router.post('/logIn', logIn);

//room booking for user 
router.post('/room/:user_id',  getRoom);

// get room info
router.get('/info', valid, getInfo);


// checkOut and delete user data
router.delete('/checkOut', getCheckOut);

// add review in for hotel
router.post('/reviews', valid, getHistory);

// for user input validation
router.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
      return res.status(err.statusCode).json(err.details.body[0].message)
    }
    return res.status(500).json(err)
});

module.exports = router;