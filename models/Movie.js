const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title : {
        type : String,
        minlength : 5,
        required : true,
        index : {
            unique : true,
        }
    },
    category : {
        type : String,
        minlength : 3,
    },
    username : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }

});

module.exports = mongoose.model('Movie', MovieSchema);

