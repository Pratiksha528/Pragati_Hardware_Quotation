const express = require("express");
const Quotation = require("../models/Quotation");
const app = express();

app.post("/", (req, res) => {
    let body = req.body;
    let quotation = new Quotation(
        {
            userid: body.userid,
            quotationdate: body.quotationdate,
            dealerid:body.dealerid,
            quotationtype:body.quotationtype,
            subtotal:body.subtotal,
            gstamount:body.gstamount,
            totalamount:body.totalamount,
            products:body.products
        }
    );
    quotation.save().then(result => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});


app.get("/", (req, res) => {
    Quotation.find().populate({ path:"userid", select: ["name"] }).populate({ path:"dealerid", select: ["name"] }).then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});


app.get("/:id", (req, res) => {
    Quotation.findById(req.params.id).then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});


app.put("/:id", (req, res) => {
    let body = req.body;
    Quotation.findByIdAndUpdate(req.params.id, { name: body.name, email: body.email }).then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});


app.delete("/:id",(req,res)=>{
    Quotation.findByIdAndDelete(req.params.id).then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
})

module.exports = app;