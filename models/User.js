const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    username : {
        type : String,
        required : true,
        minlength : 5,
        maxlength : 15,
        index : { unique : true}
    },
    password : {
        type : String,
        required : true,   
        minlength: 5
    },

    date : {
        type : Date,
        default : Date.now
    }

}

);

module.exports = mongoose.model('User',User);

