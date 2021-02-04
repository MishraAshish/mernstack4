//import express module to import routes module
let express = require("express");
//let router = express.Router({caseSensitive: true});
let router = express.Router();
let TestUserModel = require("./DataModel/TestDataValue");
let UserDataModel = require("./DataModel/UserDataModel");
let ProductDataModel = require("./DataModel/ProductDataModel"),
NProductDataModel = require("./DataModel/NProductDataModel"),
CartModel = require("./DataModel/CartDataModel"),
NCartModel = require("./DataModel/NCartDataModel");

//product api's
router.post('/api/savenproduct',(req, res)=>{
    console.log("n product data ", req.body);

    let nProductDataObject = new NProductDataModel(req.body); //this creates mongoose model to be used as to make queries
        
    nProductDataObject.save((err, newProductData)=>{ //error first callback
        if (err) {
                res.send("Error in product saving");
        } else {
                res.send(newProductData); //if product successfully saved we will get the mongodb unique id
        }
    })
})

router.get('/api/getnproducts',(req, res)=>{
    NProductDataModel.find((err, products)=>{ //error first callback
        if (err) {
                res.send("Error in getting products");
        } else {
                res.send(products);
        }
    })
})

//cart api's
router.post("/api/saveUserNCart",(req, res)=>{

    NCartModel.findOne({userid: req.body.userid},(err, cartDbObj) => {
        if (err){
            console.log("got an error!");            
            res.send(err);
        }

        if (!cartDbObj) { //checks for null cart of given user
          console.log("No cartitems Present, Adding / Inserting!"); 
          let cartObj = new NCartModel(req.body);
          cartObj.save((err, data, next)=>{        
            if (err) {
                res.send("Error Occurred"+ err);
            }      
            res.json(data);
          });
        }else{ //update the cart for given user
          console.log("CartItems Present, Replacing / Updating!");
          cartDbObj.cart = req.body.cart;
          
          cartDbObj.save((err, data, next)=>{        
            if (err) {
                res.send("Error Occurred"+ err);
            }      
            res.json(data);
          });
        }
  });
});

router.post("/api/getUserNCart",(req, res)=>{
    NCartModel.findOne({userid: req.body.userid},(err, cart) => {         
        if (err) {
            res.send("Error Occurred"+ err);
        }      
        res.json(cart);
      });
});



//cart api's
router.post("/api/saveUserCart",(req, res)=>{

    CartModel.findOne({userid: req.body.userid},(err, cartDbObj) => {
        
        if (err){
            console.log("got an error!");            
            res.send(err);
        }

        if (!cartDbObj) { //checks for null cart of given user
          console.log("No cartitems Present, Adding / Inserting!"); 
          let cartObj = new CartModel(req.body);
          cartObj.save((err, data, next)=>{        
            if (err) {
                res.send("Error Occurred"+ err);
            }      
            res.json(data);
          });
        }else{ //update the cart for given user
          console.log("CartItems Present, Replacing / Updating!");
          cartDbObj.cart = req.body.cart;
          
          cartDbObj.save((err, data, next)=>{        
            if (err) {
                res.send("Error Occurred"+ err);
            }      
            res.json(data);
          });
        }
  });
});

router.post("/api/getUserCart",(req, res)=>{
    CartModel.findOne({userid: req.body.userid},(err, cart) => {         
        if (err) {
            res.send("Error Occurred"+ err);
        }      
        res.json(cart);
      });
});

//product api's
router.post('/api/saveproduct',(req, res)=>{
    console.log("product data ", req.body);

    let productDataObject = new ProductDataModel(req.body); //this creates mongoose model to be used as to make queries
        
    productDataObject.save((err, newProductData)=>{ //error first callback
        if (err) {
                res.send("Error in product saving");
        } else {
                res.send(newProductData); //if product successfully saved we will get the mongodb unique id
        }
    })
})

router.get('/api/getproducts',(req, res)=>{
    ProductDataModel.find((err, products)=>{ //error first callback
        if (err) {
                res.send("Error in getting products");
        } else {
                res.send(products);
        }
    })
})

//sign-in sign-up user
router.post("/api/signinupuser",(req, res)=>{
    console.log("data", req.body);

    UserDataModel.findOne({userName: req.body.userName},(error, data)=>{
    //    setTimeout(()=>{
        if (error) {
            res.send("Error Occurred");
        } else if(data) { //if data returned means user is already present
            res.send(data); //data will be the user object
        } else {//we need to signup the user
            let userDataObject = new UserDataModel(req.body); //this creates mongoose model to be used as to make queries
            userDataObject.save((err, newUserData)=>{ //error first callback
                if (err) {
                    res.send("Error in sign up user");
                } else {
                    res.send(newUserData); //if user gets successfully created we will get the mongodb unique id
                }
            })
        }
    //},2000)
    })
})

//test and practice
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