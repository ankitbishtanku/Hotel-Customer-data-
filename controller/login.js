const {generateToken} = require('../middleware/jwtSign');

async function logIn(req, res, next){
    const {email, _id} = req.body;
    const user = await User.findOne({email});
    if (!user) {
        return res.status(401).json({message: 'Invalid email or password'});
    }
    const room = await Room.findOne({_id : _id});
    if(!room){
        return res.status(401).json({message: 'Invalid _id'});
    }
    res.status(200).json({token: generateToken(email, _id)});
}

module.exports = {logIn};
