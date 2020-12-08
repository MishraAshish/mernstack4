//Spread Operator : For any given array of values or objects we can convert the same by putting three dots ...arrayName

let arr = [1,2,3,4,5,6];

console.log("Actual Array " + arr);
console.log("Spread Values ", ...arr); // we spread the array arr[0], arr[1]

const num = [2,6,9,11,19,21]

function sum(a,b,c,d,e,f) {
    return a+b+c+d+e+f
}
console.log(sum(...num));
console.log(sum.apply(null, num)); //using apply


//Rest Parameter : This should be the last parameter to recieve in function and is recieved with ...array 

function sumUsingRest(...num) { //rest params - instead of - a,b,c,d,e,f
    //console.log("Rest Param Array "+ num) //[2,6,9,11,19,21]
    //reduce operator - it remembers the last iterated value and iterates over the complete array
   let sum = num.reduce(function(prevValue, nextValue) {
       console.log(prevValue, nextValue);
       return  prevValue + nextValue;
    },0)

    return sum;
}

console.log("sumUsingRest " + sumUsingRest(...num))
console.log("sumUsingRest 2nd - " + sumUsingRest(23,4234,5654,6,456,6456,654,645,6546,456,4645,564))
