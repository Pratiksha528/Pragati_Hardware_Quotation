const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema(
    {       
        companyid: {
            type:Schema.Types.ObjectId,
            ref:"companies"
        },
        pcid:{
            type:Schema.Types.ObjectId,
            ref:"productcatagories",
            required:true
        },
        name:{
            type:String,
            required:true
        },
        packetquantity:{
            type:Number,
            required:true
        },
        boxquantity:{
            type:Number,
            required:true
        },
        mrp:{
            type:Number,
            required:true
        },
        gstpercentage:{
            type:Number,
            required:true
        },
        creditsalerate:{
            type:Number,
            required:true
        },
        cashsalerate:{
            type:Number,
            required:true
        },
        stockquantity:{
            type:Number,
            required:true
        },

    },
    { 
        timestamps: true 
    }

);

const Product = mongoose.model("products", schema);
module.exports = Product;