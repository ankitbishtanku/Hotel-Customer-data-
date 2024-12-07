const mongoose = require('mongoose');
const { Schema } = mongoose;

const paymentSchema = new Schema({
    room_id : {
        type: Schema.Types.ObjectId,
        ref: 'Room',
    },
    user_id : {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    payment_method : {
        type: String,
        enum: ['upi', 'credit card', 'debit card'],
        require : true,
    },
    payment_status : {
        type: String,
        enum: ['pending', 'success', 'failed'],
    },
});