//call and apply : both are used to change the context of executing function at run time 
//the difference between them is apply reads the parameters in array format

var user = {name: "Test", age : 21, cell: "895984895"}
var user2 = {name: "Test2", age : 212, cell: "895984895"}


function getName(params, param2, param3, param4, param5) {
    console.log(this.name)
    console.log(this.age)
    console.log("params "+params)
    console.log("params "+param2)
    console.log("params "+param3)
}

getName.call(user,"GetName Method with User",2,3,4,5) //executes immediately and returns the output
//getName.call(user2,"GetName Method with User2")
getName.apply(user2,["GetName Method with User2",2,3,4,5]) //executes immediately and returns the output

//bind : stores the context and supplies the same when function execution starts

var user = {
    name : "Test Name",
    age : 21,
    getName : function () {
        
        setTimeout(function() {
            console.log("this ", this)
            console.log(this.name);    
        }.bind(this), 1000); //supplies us the context whenever execution happens, like after delay or click like events

    }
}
user.getName();