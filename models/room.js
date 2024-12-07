let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let roomSchema = new Schema({
    user_id : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    room_no : {
        type : String,
    },
    checkIn : {
        type : Date,
        default : Date.now
    },
    checkOut : {
        type : Date,
        require : true,
    },
    standard : {
        type : String,
        enum : ['basic', 'villa', 'penthouse'],
        require : true,
    },
    price : {
        type : String,
    },
});


module.exports = Room = mongoose.model('Room', roomSchema);