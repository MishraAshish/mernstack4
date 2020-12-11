//Promise : Proxy which doesn't knows the output at start of execution
//promise call back function with two objects to perform operation on resolved or rejected state

let promiseObj = new Promise((resolve, reject) =>
{  
    setTimeout(function() {   //async callback               
        resolve({
            "status":200,
            "statusMsg":"success",
            "msg":"We are resolved"
        });
    }, 1000)

    setTimeout(function() {   //async callback               
        reject({
            "status":500,
            "statusMsg":"rejected",
            "msg":"Promise gets rejected"
        });
    }, 1000)
})

promiseObj.then((statuObj) => {  //this executes in async format
    console.log(`Promise Object in then ${JSON.stringify(statuObj)}`)
}).catch((statuObj)=>{
    console.log(`Promise Object in catch ${JSON.stringify(statuObj)}`)
})

console.log(promiseObj) // this executes directly

// create a promise object to retun user name and age if its success and return no user exists if it rejected