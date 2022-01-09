var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    employee_name: {
        type:String,
        required:true
    },
    employee_ID:{
        type:Number,
        unique:true,
        required:true
    },  
    email :{
        type:String,
        unique:true,
        required:true
},
age:{
    type : Number
 }
});

var employee = mongoose.model('employeeInformation', UserSchema);

module.exports = employee;