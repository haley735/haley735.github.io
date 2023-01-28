const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let WorkHistory = new Schema({
    company_logo: {
        type: String, 
    },
    company_name: {
        type: String
    },
    job_title: {
        type: String
    },
    location:{
        type: String
    },
    description:{
        type: Array
    }


});
console.log(Schema.Types)
module.exports = mongoose.model('WorkHistory', WorkHistory);