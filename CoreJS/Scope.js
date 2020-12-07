//scope and context : both refer to the "this" keyword in a function
//scope is the accessibility of things in executing function
//context refers to the object over which function being called/executed

var address = "Test Address";

var user = {
    name : "Test Name",
    age : 21,
    getName : function () {
        console.log("this ", this)
        return this.name +" "+this.address;
    }
}

console.log(user.getName()) //the scope/context of the function sets itself to the executing object

//global context or global scope
setTimeout(() => {
    console.log("this in settimeout ", this)
}, 1000);

function name(params) {
    console.log("this in name ", this)
}
name()