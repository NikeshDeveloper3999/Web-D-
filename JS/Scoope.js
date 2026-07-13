// What is scope?
// scope can determine where the variable declared  and how it can be accessed. it controls the visibility and lifetime of the program

// Why do we need scope?
// scope can help avoid variable name conflicts and make it easier to understand the program 

// What is global scope?
// global scope is the scope that is available throughout the program   and it can declare outside of any function or block  and can be accessed from anywhere in the program


// What is block scope?
// local scope is the scope that is available only within a function or block   and it can declare inside of a function or block  and can be accessed only within that function or block
// variable declare  let const  only acccesible inside block   var is accessible inside and outside of the block
if (true) {
    let a = 10;
    var b = 20;
    const c = 30;
}
// console.log(b);


// What is function scope?
// function scope is the scope that is available only within a function   and it can declare inside of a function  and can be accessed only within that function
function myFunction(){ var b = 20  }
console.log(b);


// What is local scope?
// local scope is the scope that is available only within a function or block   and it can declare inside of a function or block  and can be accessed only within that function or block


// Difference between global and local scope.
// global scope is the scope that is available throughout the program   and it can declare outside of any function or block  and can be accessed from anywhere in the program
// local scope is the scope that is available only within a function or block   and it can declare inside of a function or block  and can be accessed only within that function or block



// Which variables are block-scoped? 
// let and const are block-scoped

// Which variables are function-scoped?
// var is function-scoped

// Can a block access global variables?
// yes a block can access global variables global variable those variable those insilize outside of the block

// Can a global variable access local variables? 
// no a global variable cannot access local variables



// What is lexical scope?
// lexical scope means function can access according to where variable is declared NOT according to where IS called 

let message = "Hello";
function outer() {
    let name = "Nikesh";
    function inner() {
        console.log(message); // Global
        console.log(name);    // Parent
    }
    inner();
}
outer();


// What is the scope chain?
// scope chaining  is the order in which JavaScript looks for variables in different scopes. It starts from the current scope and moves outward until it reaches the global scope.
let a = 1;

function outer() {
    let b = 2;

    function inner() {
        let c = 3;

        console.log(a); // Global
        console.log(b); // Parent
        console.log(c); // Local
    }

    inner();
}

outer();


// How does JavaScript resolve variables?
// JavaScript resolves variables by looking for them in the current scope and then moving outward to the global scope if they are not found in the current scope.


// What happens if a variable is not found?
// java script throw a ReferenceError 

// What are global variables?
// Global variables are declared outside any function or block and are accessible throughout the program.

// Why should global variables be avoided?
// because it can modified  anywhere    make debuging hardder   reduce code redability 
let total = 100;

function add() {
    total += 50;
}

function remove() {
    total -= 30;
}


// How does nested scope work?
// Nested scope means an inner scope can access variables from its outer scope.

function outer() {
    let a = 10;

    function inner() {
        let b = 20;

        console.log(a);
        console.log(b);
    }

    inner();
}

outer();

// Explain nested functions.
// a nested function ia a function define inside another function 

function outer() {

    function inner() {
        console.log("Hello");
    }

    inner();
}

outer();



// Explain scope lookup.
// Scope lookup is the process JavaScript uses to find a variable.

let aa = 1;
function outer() {
    let b = 2;

    function inner() {
        console.log(aa);
        console.log(b);
    }

    inner();
}

outer();

// Explain scope resolution.
