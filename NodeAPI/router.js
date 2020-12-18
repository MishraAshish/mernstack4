//import express module to import routes module
let express = require("express");
//let router = express.Router({caseSensitive: true});
let router = express.Router();


router.get('/user',(req, res)=>{
    res.json({
        name : "Test",
        user : "Super Admin"
    })
})

router.get('*',(req, res)=>{
    res.sendFile(__dirname+"/index.html")
})

module.exports = router;