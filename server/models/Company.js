const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
    },
    { 
        timestamps: true 
    }

);

const Company = mongoose.model("companies", schema);
module.exports = Company;