let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let historySchema = new Schema({
    user_id : {
        type : Schema.Types.ObjectId,
        ref : 'User',
    },
    room_id :{
        type : Schema.Types.ObjectId,
        ref : 'Room',
    },
    name : {
        type : String,
    },
    room_no : {
        type : String,
    },
    checkIn : {
        type : Date,
    },
    checkOut : {
        type : Date,
    },
    review : {
        type : String,
    },

});

module.exports = History = mongoose.model('History', historySchema);