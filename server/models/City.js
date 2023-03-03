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

const City = mongoose.model("cities", schema);
module.exports = City;