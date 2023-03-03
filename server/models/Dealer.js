const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email:{
            type:String,
            required:true
        },
        mobileno:{
            type:Number,
            required:true
        },
        cityid:{
            type:Schema.Types.ObjectId,
            ref:"cities"
        },
        address:{
            type:String,
            required:true
        },
        pincode:{
            type:Number,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    },
    { 
        timestamps: true 
    }

);

const Dealer = mongoose.model("dealers", schema);
module.exports = Dealer;