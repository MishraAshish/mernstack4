//Kind of Compilation Step 
//The process of assigining a default value to var or function defnition is termed as hoisting, this enables us to access the 
//default value even before declaration without initiialization

// function and variable hoisting

console.log(myName); //var's default value is - undefined

console.log("7. "+ printName()); //default value for a function is its definition

var myName = "Some Name"; // initialization

console.log(myName);

//creating a function
function printName(params) {
    //every function is bound to retrun something, default undefined
    return "Apoorva";
}

console.log("19. "+ printName());