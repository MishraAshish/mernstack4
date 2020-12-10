//special javascript functions that give us class like behaviour, the inhertance model still remains prototype based inheritance

class Calculator{
    constructor(num1 = 2, num2 = 1){ //initialization of properties
        this.number1 = num1, 
        this.number2 = num2
    }

    multiply = () => { //creating functions
        return this.number1*this.number2;
    }

    sum = () => {
        return this.number1+this.number2;
    }
}

let newObj = new Calculator(5,10);
console.log(newObj.multiply())
console.log(newObj.sum());