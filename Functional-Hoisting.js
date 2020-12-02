//compilation step of javascript it pulls all the var's and function definitions at the top
//this process is termed as hoisting

//second step is evaluating everything and is termed as interpreter

//functions in javasript are termed as first class member citizens
//when function gets hoisted it holds the complete definition of it self

// printName("Randy")

// function printName(name){ //named function
//     console.log("The name is "+name)
//     //return name;
// }

// printName("Tim");

//no concept of overloading, instead we have over-writing

console.log(getName(4))

function getName(firstN, lastN) {
    return "First Function"
}
console.log(getName(1,3))

function getName(firstN) {
    return "Second Function"
}
console.log(getName())

function getName() {
    return "Last Function"
}
console.log(getName(2, 5))


//Interpretaion in javascript
console.log("2 "+uniqueName)
var uniqueName = "Outer Unique";

function printName() {
    console.log("6 "+uniqueName) //due to hoisting in printName it gets undefined value

    var uniqueName = "Inner Unique"
    
    console.log("10 "+uniqueName)
}

printName();
console.log("14 " + uniqueName);