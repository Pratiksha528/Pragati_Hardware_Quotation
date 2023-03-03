const express = require("express");
const Dealer = require("../models/Dealer");
const app = express();

app.post("/", (req, res) => {
    let body = req.body;
    let dealer = new Dealer(
        {
            name: body.name,
            email: body.email,
            mobileno:body.mobileno,
            cityid:body.cityid,
            address:body.address,
            pincode:body.pincode,
            password:body.password
        }
    );
    dealer.save().then(result => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});

app.get("/", (req, res) => {
    Dealer.find().populate({ path:"cityid", select: ["name"] }).then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});

app.get("/:id", (req, res) => {
    Dealer.findById(req.params.id).then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});


app.put("/:id", (req, res) => {
    let body = req.body;
    Dealer.findByIdAndUpdate(req.params.id, { name: body.name, email: body.email }).then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});


app.delete("/:id",(req,res)=>{
    Dealer.findByIdAndDelete(req.params.id).then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
})

module.exports = app;