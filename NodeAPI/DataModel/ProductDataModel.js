let mongooseObj = require("mongoose"), //importing the mongoose module object
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

mongooseObj.connect("mongodb://127.0.0.1/mernstack4");

let ProductSchema = new schemaObj({
    name: {type:String, required:true},
    price: {type:Number},
    camera: {type:String},
    ram: {type:String},
    display: {type:String},
    color: {type:String},    
},
{
    versionKey: false //false - set to false then it wont create in mongodb
});

let ProductModel = mongooseObj.model("product",ProductSchema);
module.exports = ProductModel;
//note: donot put versionkey to true or it will start throwing error