var Web3 = require("web3");
var express = require("express");
var router = express.Router();
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:30303"));
var solc  = require("solc");
var fs = require("fs");
var code = fs.readFileSync("payment.sol").toString();
var compiledcode = solc.compile(code);
// console.log(compiledcode)

var abi = JSON.parse(compiledcode.contracts[':s2s'].interface);
console.log(abi)
var byteCode = compiledcode.contracts[':s2s'].bytecode;
router.post("/stos",function(req,res){
        console.log("getting post")
        // var amount = req.body.amount;
        // var s1 = req.body.student1;
        // var s2 = req.body.student2;
        var s1am = req.body.s1am;
        var vc = web3.eth.contract(abi);
        // var s2am = req.body.s2am;
        // var am = req.body.am;
        
        vc.new({data: byteCode, from: '0xe4e294e09c228d59088c1e2ea1aba34cd6e6a550', gas: 4700000},(er,newcontr)=>{
                // console.log(newcontr)
                if(!er){
                        if(!newcontr.address){
                                console.log(newcontr.transactionHash)
                        }else{
                                newcontr.setamount(s1am,{from:'0xe4e294e09c228d59088c1e2ea1aba34cd6e6a550',gas:4700000},(err,res)=>{
                                // console.log(err,res);
                                newcontr.deductamount({from:'0xe4e294e09c228d59088c1e2ea1aba34cd6e6a550',gas:4700000},(e,res1)=>{
                                console.log("Hii"+res1.toString())              
                                })
                                  
                                
                        })
                        // newcontr.setamount.sendTransaction()
                        }
                        
                }
                
        })
//  deployedContract.address
        // var contractInstance = vc.at(deployedContract.address)
        let rem;
        // console.log(web3.eth.accounts[0])
//         web3.eth.sendTransaction({from:web3.eth.accounts[0],to:deployedContract.address}).then(function(r){
//         console.log(r)
// })
        // rem = contractInstance.deductamount.call();
        // deployedContract.setamount.call(10,(err,res)=>{
        //         console.log(res,err)

        //         contractInstance.deductamount.call((er,res1)=>{
        //                 console.log(res1)
        //         })
        // })
        // deployedContract.setamount(10,(err,res)=>{
        //         console.log(err,res)
        // })
        // console.log(rem)

// rem = contractInstance.deductamount.call()
//        let r = rem.toNumber();
        // web3.eth.call({from:web3.eth.accounts[0],to:rem}, function(error, result) {
        //         console.log(result)
        // });

        // console.log(rem)
        // console.log(rem.toNumber())
        // console.log(rem.e)
        // console.log(rem.c)
        // console.log(rem.s)
        
        // res.json({"rem":s1am})
})

router.post("/testing",function(req,res){
        let p = req.body.s1am;
        let a = p-10;
        res.json({"msg":a})
})
module.exports = router;