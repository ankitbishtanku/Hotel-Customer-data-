const bcrypt = require('bcryptjs');
let User = require('../models/user');

async function register(req, res, next){
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({email:email});
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        let newUser = await User.create({
            name,
            email,
            password: await bcrypt.hash(password, 10),
        });

        res.status(201).json({userInfo: newUser});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = {register};