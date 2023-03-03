const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema(
    {
        userid: {
            type:Schema.Types.ObjectId,
            ref:"users"
        },
        quotationdate: {
            type: Date,
            unique: true,
            required: true,
            default: new Date()
        },
        dealerid: {
            type:Schema.Types.ObjectId,
            ref:"dealers"
        },
        quotationtype: {
            type: String,
            required: true
        },
        subtotal:{
            type:Number,
            required:true
        },
        gstamount:{
            type:Number,
            required:true
        },
        totalamount:{
            type:Number,
            required:true
        },
        products:[]
    },
    { timestamps: true }
);

const Quotation = mongoose.model("quotations", schema);

module.exports = Quotation;