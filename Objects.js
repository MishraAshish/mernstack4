//Object or Object Literal : set of key value pair and gives us most of the the features close to classes
//Object notation - {}

// var User = {
//     name : "Test",
//     age : 21,
//     business : "Odd Jobs",
//     getName : function () {
//         return this.name;
//     }
// }

// console.log(User.getName());

// //inheritance using object a classes 

// //one way is - we should avoid using this as it keeps prototype copied to the parent

// // var employee = new Object(User);
// // employee.address = "Somewhere on earth";
// // console.log(employee.name);
// // console.log(User.address);

// //second way : this is the acceptable way of creating inheritance in objects, 
// //this instead of copying object, copies the prototype chain so that the reference have one way flow
// var student = Object.create(User);
// student.address = "Somewhere on earth";
// console.log(User.address);

// student.name = "Jack";
// student.getAddress = function () {
//                         return this.address;
//                     }

// console.log("student "+student.getName());
// console.log("student "+student.getAddress());
// console.log("student "+student.business);
// console.log(student.__proto__);

// merging objects 
var obj1 = {one : "1", two : "2", three : "3.1"}
var obj2 = {three : "3.2", four : "4", five : "5"}

Object.assign(obj2, obj1);
console.log(obj2);

//how to break the prototype chain : pass null in the constructor
let nullPrototype = Object.create(null);
console.log(nullPrototype.__proto__);

//empty objects also have prototype chain
let emptyObject = {}; //Object.create({})
console.log(emptyObject.__proto__);


//class like structures we can create through functions - called contructor functions

var cnstFunc = function (firstN, lastN, age) {
    this.FirstName = firstN;
    this.LastName = lastN;
    this.age = age;
    this.getUserName = function () {
        return this.FirstName +" "+this.LastName;
    }
}

var constObj = new cnstFunc("FN","LN",25) //use the new keyword
console.log(constObj.getUserName());