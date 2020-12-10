// If my key value (that i am reading from any variable) are same then instead of having both of them we can have only one

let cat = "Miaow",
 dog = "Woof",
 bird = "Chrip",
 lion = "roar"

 animalSound = {
    cat : cat,
    dog : dog,
    bird: bird,
    lion: lion
}

console.log(`animalSound `+ animalSound) //it will just do a toString() of animalSound which is - [object Object]

console.log(`animalSound `+ JSON.stringify(animalSound))

console.log(`animalSound `, animalSound)//use comma ,  to print object or JSON.stringify


animalSoundShortHand = {
    cat ,
    dog ,
    bird ,
    lion
}

console.log("Short Hand Object ", animalSoundShortHand)