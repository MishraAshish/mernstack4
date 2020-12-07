//Execution in javascipt uses Stack like other languages and this format is LIFO : Last In First Out
//call stack : LIFO - last in first out
////call stack visualization upto and extent

function foo(){
    throw new Error("OOPs!");
}

function bar(){
	foo();
}

function baz(){
    bar();
}

baz();


//blow up the stack

function baz(){
    baz();
}

baz();