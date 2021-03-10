let express = require("express"); //importing express module to create express web-app

let app = express(); //when we instantiate it creates express application capable of handling rest requirements
global.port = process.env.port || 9090;
const bodyParser = require("body-parser");
let router = require("./router");
let cors = require("cors");// this middleware is used to set cross origin request in api's

app.use(cors());//setting this cors at global level so that each api can be accessed by other port

app.use(bodyParser.urlencoded({extended:false})); //middle-ware 
app.use('/static', express.static('Public')); // serve static files like images css using static middle ware
app.use(bodyParser.json({limit:'2mb', extended:false})); //json middle-ware
app.use('/',router);

app.listen(global.port);
console.log(`Express is listening at ${global.port}`);