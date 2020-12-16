//To Do any job with files we have fs (file systems) module (gets default installed when we install node framework)

let fs = require("fs");

console.log("File read starts")

let data = fs.readFileSync("./testfiletoread.txt","utf-8"); //sync call that keeps hold the single thread and next execution needs to wait
console.log(`data => ${data}`)

console.log("File read ends")

//change the call to async format and start reading through callbacks

console.log("File read async starts")

fs.readFile("./testfiletoread.txt", (err, data)=>{ // callback to read data async, this call back is error first callback
    console.log(`err => ${err}`)
    console.log(`data => ${data}`)
})

console.log("File read async ends")

//REPL : read evaluate print and loop
// to break the loop use - ctrl+c (twice)
// for (let index = 0; index < 100000; index++) {
//     console.log(index)
// }

let buf = new Buffer.alloc(26); 

for (var i = 0 ; i < 26 ; i++) 
{ 
    buf[i] = i + 97; 
}

console.log( buf.toString('ascii')); // outputs: abcdefghijklmnopqrstuvwxyz 
console.log( buf.toString('ascii',0,5)); // outputs: abcde 
console.log( buf.toString('utf8',0,5)); // outputs: abcde 
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde
