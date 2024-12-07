const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookingSchema = new Schema({
    total_room : {
        type : String,
    }, 
    price : {
        type : String,
        require : true,
    },

});

module.exports = Booking = mongoose.model('Booking', bookingSchema);