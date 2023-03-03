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

const Productcatagory = mongoose.model("productcatagories", schema);
module.exports = Productcatagory;