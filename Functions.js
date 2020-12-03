//nested functions

// function name(params) {
//     var $someVal = "test";
//     function age(params) {
//         var $someValNested = "test";
//         function name(params) {
            
//         }
//     }
// }

//callback functions : are the parameters passed as function and they hold their scope throught the execution

function print(callBk, param) {
    console.log("Printing ", callBk(param))
}

function getName(name) {
    return "Mr. " + name;
}

function getAge(val) {
    return "Normal Age " + val;
}

print(getName, "Ashish");
print(getAge, 32);