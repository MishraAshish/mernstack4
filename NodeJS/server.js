let express = require("express"); //importing express module to create express web-app

let app = express(); //when we instantiate it creates express application capable of handling rest requirements

app.get("/user", (req, res)=>{
    res.send("Hello User");
})

app.get("/", (req, res)=>{
    res.send("Just Hello");
})
 
app.listen(9090)

console.log("Express is listening at 9090");