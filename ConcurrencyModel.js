//JS is single threaded and we have api's like XHR, SetTimeOut, SetInterval

console.log(1)

setTimeout(function () { //non blocking execution done by javascript using a concurrency model and event loop
    console.log(2)
}, 1000)

setTimeout(function () { //non blocking execution done by javascript using a concurrency model and event loop
    console.log(3)
}, 1000)

setTimeout(function () { //non blocking execution done by javascript using a concurrency model and event loop
    console.log(4)
}, 1000)

setTimeout(function () { //non blocking execution done by javascript using a concurrency model and event loop
    console.log(5)
}, 1000)

console.log(6)