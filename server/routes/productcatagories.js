const express = require("express");
const Productcatagories = require("../models/Productcatagory");
const app = express();

app.post("/", (req, res) => {
    let body = req.body;
    let productcatagories = new Productcatagories(
        {
            name: body.name
        }
    );
    productcatagories.save().then(result => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});


app.get("/", (req, res) => {
    Productcatagories.find().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});


app.get("/:id", (req, res) => {
    Productcatagories.findById(req.params.id).then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});


app.put("/:id", (req, res) => {
    let body = req.body;
    Productcatagories.findByIdAndUpdate(req.params.id, { name: body.name, email: body.email }).then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});


app.delete("/:id",(req,res)=>{
    Productcatagories.findByIdAndDelete(req.params.id).then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
})

module.exports = app;