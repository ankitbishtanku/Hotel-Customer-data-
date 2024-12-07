let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema =new Schema({
    name : {
        type : String,
    },
    email : {
        type : String,
        unique : true
    },
    password : {
        type : String,
    },
}, { timestamps: true });

module.exports = User = mongoose.model('User', userSchema);