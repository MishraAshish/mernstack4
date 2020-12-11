//An arrow function expression has a shorter syntax than a function expression : ()=>{} 
//does not have its own this, arguments, super or new.target.
//These function expressions are best suited for non-method functions, and they cannot be used as constructors.

//function name(params) {}
//let name = () => {}
//(we expect the parameters) => {function definition}

//1. Shorter Syntax : () => {}

// let print = () => {console.log("Arrow Function")} 
// let print1 = () => console.log("Arrow Function1")

// print();
// print1();

// let sum = (a, b) => a+b;
// // function sum(a,b) {
// //     return a+b
// //}

// console.log(sum(5,6));

//write a arrow function which accepts 4 params first two to do sum and next 2 to do multiplication, then add both


//2. Arrow functions do not have thier own context, instead they copy the context of their parent
// eventually it solves the problem that was solved by bind
var user = {
    name : "Justin",
    age : 21,
    getName : function () {
            console.log(this.name);

            // setTimeout(function() {
            //     //console.log("this ", this)
            //     console.log(this.name);
            // }.bind(this), 1000); //supplies us the context whenever execution happens, like after delay or click like events

            setTimeout(() => { //passing arrow function as callback
                //this will now set to the parents context
                console.log(`Arrow Function ` + this.name);
            }, 2000);

            //how arrow function copies the context of parent function
            // let that = this; //copied the parent context

            // setTimeout(function() {
            //     console.log(`Using That ` +that.name);
            // }, 2000);
    }
}
user.getName();


//please print below array

// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('Index: ' + i + ', element: ' + arr[i]);
//   }, 500);
// }
