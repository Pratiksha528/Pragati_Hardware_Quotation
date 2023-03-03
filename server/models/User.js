const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: false,
            unique:true
        },
        mobileno: {
            type: Number,
            required: true,
            unique:true
        },

        usertype: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
);

const User = mongoose.model("users", schema);
module.exports = User;