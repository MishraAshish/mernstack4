// ES6 syntactic sugar to help create identifiers without copying object and multiple initializer

//Object destructuring

const student = {
    firstname: 'Glad',
    lastname: 'Chinda',
    country: 'Nigeria'
};
let {firstname, lastname, country, cellphone = 2316584978, gender = "Y"} = student;

console.log(firstname);
console.log(lastname);
console.log(country);
console.log(cellphone);
console.log(gender);

//nested object destructuring
//Multi Level Destructuring of Nested Object

const student2 = {
    name: 'John Doe',
    age: 21,
    scores: {
        maths: 74,
        english: 63
    }
};

const { name, age, scores:{maths, physics = 92} } = student2;

console.log(name);
console.log(age);
console.log(maths);
console.log(physics);



//Array Destructuring :
/*
//Basic Assignment

let foo = ["one", "two", "three"];

let [one = 1, two = 1, three = 1, four = 1] = foo; //basic assignment and default initialization

console.log(one);
console.log(two);
console.log(three);
console.log(four); //default for indentifiers is undefined

//Assiging Rest of and array using destructuring

let [a, ...b] = [1,2,3,4,5]; //rest should be the last in assignement

console.log(a +" and "+ b);

//Assignment and Declaration separate

let name, age;

[name, age] = ["Tim", 19]

console.log(name +" "+age);

//swapping of identifers

[name, age] = [age, name]

console.log(name +" "+age);
*/


// ques : 
//Print Last Name
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}