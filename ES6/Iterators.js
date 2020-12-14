//Filter, Map, Reduce and Some - Iterators
//Are advanced iterators, always give us a shallow copy of data present and 
//maintain the data immutability whatever change we do to get new collection it will not update in parent collection

let personsList = [
    {id : 1, name : "John", savedby : "CaptainAmerica"},
    {id : 2, name : "Alice", savedby : "IronMan"},
    {id : 3, name : "Roger", savedby : "CaptainAmerica"},
    {id : 4, name : "Adam", savedby : "IronMan"},
    {id : 5, name : "Alex", savedby : "SpiderMan"}
];

//1. Print the persons saved by captain america
//We can't manipulate the given object in iteration
let personCA = personsList.filter((person)=> person.savedby === "CaptainAmerica");

console.log("Saved By CA", personCA);
//console.log("Core List", personsList);

//2. Print the person names saved by captain america
//map allows us to change the person in iteration

//let personCANames = personsList.map((person)=> person.savedby === "CaptainAmerica" ? {"Person Saved" : person.name, "His ID " :person.id} : "").filter(p=>p!="")
let personCANames = personsList.map((person)=> person.savedby === "CaptainAmerica" ?  person.name : "").filter(p=>p!="")

console.log("Saved By CA Names", personCANames);
//console.log("Core List", personsList);

//3. Check if anyone saved by SpiderMan
//Some is the iterator which gives us a short circuit if condition is met

let anyOneSavedBySpiderMan = personsList.some((person)=>person.savedby === "SpiderMan")

console.log("Anyone Saved By Spider Man ",anyOneSavedBySpiderMan)
//console.log("Core List", personsList);

//4. How many people saved by each super hero
// Reduce is the iterator used to remember the previous value

let numberOfPersonsSavedByEachSuperHero = personsList.reduce((preViousVal, currentVal)=>{
    console.log("preViousVal ",preViousVal)
    console.log("currentVal ",currentVal)

    preViousVal[currentVal.savedby] = preViousVal[currentVal.savedby] ? preViousVal[currentVal.savedby]+1 : 1;
    return preViousVal;

}, new Set())

console.log("Saved By Each", numberOfPersonsSavedByEachSuperHero)
//console.log("Core List", personsList);
