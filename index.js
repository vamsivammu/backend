var web3 = require("web3");
var express = require("express");
var cors = require("cors");

const bp = require("body-parser");
var payment = require("./payment/payment")
var app = express();
app.use(cors());
app.use(bp.json())

app.use("/payment",payment)

app.listen(8080,function(err){
    console.log("connected")  
})




