//case sensitive :
var myname = "ten"
var myName = "nine";

// console.log(myName)
// console.log(myname)

// myName = undefined;
// console.log(typeof myName);

// myName = null;
// console.log(typeof myName);

//leteral : {} // object literal

var userDetail = {
    name : "Test Me",
    age : 29,
    address : "Delhi, India"
}
console.log(userDetail.name); //it will not become a global variable

//single - line commenting
//commenting : ctrl+/
//uncomenting : ctrl+/

//multi line commenting
/*
var employee = {
    name : "Employee Name - Tim",
    age : "25"
}
*/

// Operators : >, <, ==, ===, !, &&, || -operands present in javascript

// if (8 > 9) {
//     console.log(200)
// }else{
//     console.log(100)
// }

// == : compares the value only and gives the result
// if (8 == "8") {
//     console.log(50)
// }

// === " compares the value as well as the type"
// if (8 === "8") {
//     console.log(40)
// }

// && or ! - not operator

if (!(8>9)) {
    console.log("not operator")
}

if (userDetail && userDetail.age == "29") {
    console.log("Checking and operator");    
}

if (userDetail && userDetail.age === "29") {
    console.log("Checking and operator");    
}

if (userDetail || userDetail.age === "29") {
    console.log("Checking or operator");    
}

// String, Number, Boolean, Null, Undefined, --> Object <-- , Symbol

mySym = Symbol("New Value");
console.log("Symbol ", mySym);
console.log("TypeOf Symbol ", typeof mySym);

//identifiers can use alphanumeric, can also use special characters like - $, _ , will not start with a number

var _myName, $myName, myName1

//var %myName, *myName, 1myName -in-valid variables