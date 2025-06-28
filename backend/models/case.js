const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
        },
        summary: {
            type:String,
            required:true,
            maxLength:150,
        },
        court:{
            type:String,
            required:true,
        },
        date:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
);

module.exports = mongoose.model("Case", caseSchema);