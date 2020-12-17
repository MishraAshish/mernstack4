let express = require("express"); //importing express module to create express web-app

let app = express(); //when we instantiate it creates express application capable of handling rest requirements
global.port = process.env.port || 9090;
const bodyParser = require("body-parser");
let adminApp = express();

app.use(bodyParser.urlencoded({extended:false})); //middle-ware 
app.use('/static', express.static('Public')); // serve static files like images css using static middle ware

//query string parameters
app.get('/queryParam',(req, res)=>{ //http://localhost:9090/queryParam?name=christtopher%20columbus&age=21&address=newyork
    let queryString = req.query;
    let name = req.query["name"]
    res.send(name)
    //res.send(queryString)
})

//getproductbyid/:id
app.get('/getproductbyid/:id/:username',(req, res)=>{ //http://localhost:9090/getproductbyid/1001
    let idParam = req.params["id"];
    let userParam = req.params["username"];
    res.send({idParam, userParam})
})

//create a api to recieve username, age, address from querystring parameters and save that to a file using writestream

app.get("/user", (req, res)=>{ //http://localhost:9090/user => URI - uniform resource indentifier
    //res.send("Hello User");
    // res.json({
    //     "name":"test"
    // })
    // res.sendFile(__dirname+"/testfiletoread.txt")
    // res.sendFile(__dirname+"/writefile.js")
    res.sendFile(__dirname+"/index.html")
})

app.use("/admin",adminApp); // mounted a new application module

adminApp.get('/hello',(req, res)=>{
    res.json({
      "Application":"Admin",
      "Msg" : "New app is mounted"
    })
})

adminApp.post('/hello',(req, res)=>{
  res.json({
    "Application":"Admin",
    "Msg" : "New app is mounted"
  })
})


app.get("/express", (req, res)=>{
    res.send("ExpressJs is awsome web server!");
})

app.get("/", (req, res)=>{
    res.send("Just Hello");
})
 
app.listen(9090)

console.log("Express is listening at 9090");