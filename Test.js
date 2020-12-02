//select and press ctrl+/
// console.log("Logging my first message on server terminal");
// console.log("ES-5, Vanila JS, Core Javascript - Functional Programmes")
// console.log("ES-6 : Ecmascripts - 2015")
// console.log("ES-7 : Ecmascripts - 2016")
// console.log("ES-8 : Ecmascripts - 2017, ES-NEXT")

console.log("Default "+ name)

//string, number, boolean, undefined, null, object
var name = "Apoorva"; //functional scope variable

console.log("Name Is : "+ name);
console.log(typeof name);

name = 2500;
console.log("Tests Passed : "+ name);
console.log(typeof name);

name = 2500.2500;
console.log("Tests Passed 2 :- "+ name);
console.log(typeof name);

name = 1==1; //true;
console.log("A boolean value :- "+ name);
console.log(typeof name);

name = undefined;
console.log("Interesting and Default Data Type :- "+ name);
console.log(typeof name);

name = null;
console.log("wierd data type :- "+ name);
console.log(typeof name);

name = {
    name : "Apoorva",
    tests : 3200
};
console.log("Object Data :- ", name);
console.log("Object Data :- "+ JSON.stringify(name));
console.log(typeof name);