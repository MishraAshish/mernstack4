//Default Parameters : are assigned in parameters as default values instead of undefined 
//and if values are not passed it assigns the default alue to it

function add(val1 = 0, val2 = 0) { //default parameter 
    return val1 + val2;
}

console.log(add(5, 5));
console.log(add(5));
console.log(add());