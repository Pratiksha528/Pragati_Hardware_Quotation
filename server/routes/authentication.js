const express = require("express");
let jwt = require("jsonwebtoken");

const User = require("../models/User");
const Dealer = require("../models/Dealer");
const app = express();

app.post("/userlogin", (req, res) => {
    let body = req.body;

    User.find({ username: req.body.username, password: req.body.password }).then(result => {

        if (result.length > 0) {

            let token = jwt.sign({
                token:result[0]
            }, 'SECRETKEY', { expiresIn: "365d" });


            res.end(JSON.stringify({ status: "success", token:token, data: result[0] }));
        }
        else {
            res.end(JSON.stringify({ status: "failed", data: "Invalid credentials" }));
        }
    });
});

app.post("/dealerlogin", (req, res) => {
    let body = req.body;

    Dealer.find({ email: req.body.email, password: req.body.password }).then(result => {

        if (result.length > 0) {
            let token = jwt.sign({
                token:result[0]
            }, 'SECRETKEY', { expiresIn: "365d" });

            res.end(JSON.stringify({ status: "success", token:token, data: result[0] }));
        }
        else {
            res.end(JSON.stringify({ status: "failed", data: "Invalid credentials" }));
        }

    });
});

app.post("/forgotpassword",(req,res)=>{
    let body = req.body;
    User.find({ username: req.body.username, email: req.body.email }).then(result => {

        if (result.length > 0) {
            res.end(JSON.stringify({ status: "success", data:  "Password sent to email." }));
        }
        else {
            res.end(JSON.stringify({ status: "failed", data:  "Email doen't exists."  }));
        }
    });
});

app.post

module.exports = app;