const History = require('../models/history');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
let {secretKey} = require('../setUp/urls');


async function getHistory(req, res, next){
	let reviews = req.body.reviews;
	let token = req.headers.authorization;
    
	try{
		let decode = jwt.verify(token, secretKey, (err, decoded) => {
        	if(err){
            	return res.status(401).json({message : "Invalid token"});
        	}
        	else{
        		return decoded;
        	}
    	});

		console.log(decode.email)

	    let user = await User.findOne({email : decode.email});
	    console.log(user._id)
	    let history = await History.findOne({user_id : user._id});

	    let newHistory = new History({
	    	name : user.name,
	    	user_id : user._id,
	        reviews : reviews,
	    });

	    newHistory.save();
	    res.json({newHistory})

	}catch(error){
		console.log(error)
	}
}

module.exports = {getHistory};