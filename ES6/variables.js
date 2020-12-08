// lexical scope or block scope variables : let and const

console.log(name) // undefined
{ 
    var name = "Some Name"; //functional scope
    var name = 926592; //re-declaration and re-assignment both possible
    
    let nameLet = "Some Name"; //lexical or block scope
    //let nameLet = 65656; //re-declaration not alowed
    nameLet = 65656; // re-assignment can be done

    const nameConst = "Some Name"; //lexical or block scope
    //const nameConst = 5656 // //re-declaration and re-assignment both are not allowed
    //const nameConst2; // variable needs to assign a value as soon as declared

    //constanst are mutable when we have reference type variables

    const user = {
        name : "Test Name",
        age : 35
    }

    //user = {}
    user.age = 21;

    console.log(user)
}

console.log(name) // some name
//console.log(nameLet) // some name
//console.log(nameConst) // some name

