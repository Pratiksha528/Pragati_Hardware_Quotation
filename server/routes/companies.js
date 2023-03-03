const express = require("express");
const Companies = require("../models/Company");
const app = express();

app.post("/", (req, res) => {
    let body = req.body;
    let companies = new Companies(
        {
            name: body.name
        }
    );
    companies.save().then(result => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});


app.get("/", (req, res) => {
    Companies.find().then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});


app.get("/:id", (req, res) => {
    Companies.findById(req.params.id).then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});


app.put("/:id", (req, res) => {
    let body = req.body;
    Companies.findByIdAndUpdate(req.params.id, { name: body.name, email: body.email }).then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});


app.delete("/:id",(req,res)=>{
    Companies.findByIdAndDelete(req.params.id).then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
})

module.exports = app;