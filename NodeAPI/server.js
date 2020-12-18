let express = require("express"); //importing express module to create express web-app

let app = express(); //when we instantiate it creates express application capable of handling rest requirements
global.port = process.env.port || 9090;
const bodyParser = require("body-parser");
let router = require("./router");

app.use(bodyParser.urlencoded({extended:false})); //middle-ware 
app.use('/static', express.static('Public')); // serve static files like images css using static middle ware

app.use('/',router);

app.listen(global.port);
console.log(`Express is listening at ${global.port}`);