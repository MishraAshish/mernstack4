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

const nodemailer = require("nodemailer");

function sendMail() {
    
// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  console.log("testAccount.user "+testAccount.user);

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: testAccount.user, // sender address
    to: "training6synergistic@gmail.com", // list of receivers
    subject: "Hello", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
main().catch(console.error);
}

//product api's
//url to call : http://localhost:9090/api-docs
/**
 * @swagger
 * /api/savenproduct:
 *  post:
 *      summary : add a new product
 *      requestBody:
 *          required: true
 *      content:
 *          application/x-www-form-urlencoded:
 *      schema:
 *          type: object
 *          properties:
 *              name:       # <!--- form field name
 *                  type: string
 *              price:      # <!--- form field name
 *                  type: integer
 *          required:
 *              - name
 *      responses:
 *          '200':
 *           description: save a product to db
 */
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
//url to call : http://localhost:9090/api-docs
/**
 * @swagger
 * /api/getnproducts:
 *  get:
 *      description: use to get all products
 *      responses:
 *          '200':
 *           description: a full response to product
 */
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

        sendMail();

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
            setTimeout(()=>{
                res.json(data);
            },2000)  
            
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