var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
app.use(cors());
// let jwt = require("jsonwebtoken");


app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }))    
app.use(bodyParser.urlencoded({ limit: "50mb", extended: "true" }));

mongoose.connect("mongodb://127.0.0.1:27017/pragatihardware");

var db = mongoose.connection;
mongoose.set("strictQuery",true);

db.on("error",(err)=>{
    console.log(err);
});

db.on("open",()=>{
    console.log("connection Success")   
});
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,PATCH,DELETE");
        return res.status(200).json({});
    }

    //Token validation
    if(!req.headers.authorization){
        let data = {
            status: "exit",
            message:"autherization error"
        };
        res.end(JSON.stringify(data));
    }
    else if(req.path.includes("/gettoken"))
    {
        next();
    }
    else{
        try{
            const authHeader = req.headers.authorization;
            const token =  authHeader.split(' ')[1];
            const decoded = jwt.verify(token, 'SECRETKEY');

            next();
            //Check if decoded value is right or wrong
        }
        catch(ex){
            let data = {
                status: "exit",
                message:"autherization error-decode"
            };
            res.end(JSON.stringify(data));
        }
    }
    // next();
});

app.get('/', (req, res) => {
    res.send("Hello Worldddd");
    res.end();
});    
app.post("/gettoken", (req, res)=>{
    let body = req.body;
    let token = jwt.sign({
        token:body.token
    }, 'SECRETKEY', { expiresIn: "365d" });
    let data = {
        status: "success",
        token: token
    };
    res.end(JSON.stringify(data));
});

app.use("/users",require("./routes/users"));
app.use("/dealers",require("./routes/dealers"));
app.use("/products",require("./routes/products"));
app.use("/quotations",require("./routes/quotations"));
app.use("/productcatagories",require("./routes/productcatagories"));
app.use("/companies",require("./routes/companies"));
app.use("/cities",require("./routes/cities"));
app.use("/authentication",require("./routes/authentication"));
let jwt = require("jsonwebtoken");


// app.use('/quotation', require("./routes/quotation"))

app.listen(8081, () => {
    console.log("Server is running ");
});

