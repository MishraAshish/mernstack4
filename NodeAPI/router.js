//import express module to import routes module
let express = require("express");
//let router = express.Router({caseSensitive: true});
let router = express.Router();
let TestUserModel = require("./DataModel/TestDataValue");

router.get('/getdata',(req, res)=>{
    
    TestUserModel.find((err, data)=>{
        if (err) {
            console.log("Error", err)
        } else {
            res.send(data)
        }
    })
})

router.get('/saveuser',(req, res)=> {
    console.log("Query Obj ", req.query);
    let mongoTestObj = new TestUserModel(req.query);

    mongoTestObj.save((err, data)=>{ //node js pattern of error fisrt call-back // upon saving data we get error at first place if it occurs at the time of saving
        if (err) {
            console.log("Error"+ JSON.toString(err))
            res.send(err)
        } else {
            res.send(data)
        }
    })
})

router.get('/user', (req, res)=>{
    res.json({
        name : "Test",
        user : "Super Admin"
    })
})

router.get('*',(req, res)=>{
    res.sendFile(__dirname+"/index.html")
})

module.exports = router;