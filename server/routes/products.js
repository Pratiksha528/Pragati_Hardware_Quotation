const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

router.post("/", (req, res) => {
    let body = req.body;
    let product = new Product(
        {
            companyid: body.companyid,
            pcid: body.pcid,
            name: body.name,
            packetquantity: body.packetquantity,
            boxquantity: body.boxquantity,
            mrp: body.mrp,
            gstpercentage: body.gstpercentage,
            creditsalerate: body.creditsalerate,
            cashsalerate: body.cashsalerate,
            stockquantity: body.stockquantity
        }
    );
    product.save().then(result => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});


router.get("/", (req, res) => {
    let condition = {};
    if (req.query.pcid != "" && req.query.pcid != undefined)
        condition["pcid"] = req.query.pcid;
    if (req.query.companyid != "" && req.query.companyid != undefined)
        condition["companyid"] = req.query.companyid;

    Product.find(condition).populate({ path: "pcid", select: ["name"] }).populate({ path: "companyid", select: ["name"] }).then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });

});


router.get("/", (req, res) => {
    Product.findById(req.params.id).then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});


router.get("/:id", (req, res) => {
    Product.findById(req.params.id).then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});




router.put("/:id", (req, res) => {
    let body = req.body;
    Product.findByIdAndUpdate(req.params.id, body).then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
});

//, { name: body.name, email: body.email }

router.delete("/:id", (req, res) => {
    Product.findByIdAndDelete(req.params.id).then((result) => {
        res.end(JSON.stringify({ status: "success", data: result }));
    }, (err) => {
        res.end(JSON.stringify({ status: "failed", data: err }));
    });
})

router.get("/:category", (req, res) => {
    // console.log(req.params); 
    res.send(req.params);
    // Product.find().then((result) => {
    //     res.end(JSON.stringify({ status: "success", data: result }));
    // }, (err) => {
    //     res.end(JSON.stringify({ status: "failed", data: err }));
    // });
});


module.exports = router;
