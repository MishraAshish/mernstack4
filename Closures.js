// Closures : A function which contains another function and 
//returning function holds the values that which are in public scope of parent functions

//Eccapsulation is achieved, also it gives a module and singleton pattern :

function Parent(session) {
    var name = "TestMe", age = 21; // can be public

    var password = "xyztest*@##"; //private value
    var salary = "$3000"; //private value

    var child = function (address) {

        return {
            name, //short hand ES-6
            age,
            session,
            address
        }
    }
    return child;
}

var myOutPut = Parent("MERNSTack");

console.log(myOutPut("Somewhere in India"))