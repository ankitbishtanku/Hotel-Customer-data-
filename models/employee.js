let mongoose = require('mongoose');
let {Schema} = mongoose;

let employeeSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    mobileNo : {
        type : String,
        required : true,
    },
    position : {
        type : String,
        enum : ['Chef', 'Waiter', 'Cleaner']
    },
    active : {
        type : Boolean,
        default : false,
    }
})

module.exports = Employee = mongoose.model('Employee', employeeSchema);