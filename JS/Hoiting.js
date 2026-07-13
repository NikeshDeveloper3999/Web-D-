// What is hoisting?
// hoisting is a js behaviour where variables and function declarations are moved to the top of their containing scope during the compile phase.

// Why does hoisting happen?
// hoisting happens because of the way js code is compiled in two phases.
//  1 memory creation phase  2  execution phase
// during the memory creation phase, js allocates memory for variables and function declarations, but does not assign them a value, they are initialized with a default value of undefined.


// What gets hoisted?
/*
Declaration	          Hoisted?    	         Initialized?
var	                  ✅ Yes   	            undefined
let                   ✅ Yes	                ❌ No (TDZ)
const	              ✅ Yes	                ❌ No (TDZ)
Function declaration  ✅ Yes	                ✅ Full function
Function expression	  Variable is hoisted	  Function isn't
Arrow function	     Variable is hoisted	  Function isn't
Class	            ✅ Yes	                ❌ No (TDZ)

*/
// Are variables hoisted?
// All variable declarations (var, let, const) are hoisted.

// Are functions hoisted?
// function declaration  fully hoisted
sayHello();

function sayHello() {
    console.log("Hello");
}

// Are classes hoisted?
// Classes are hoisted, but they stay in the Temporal Dead Zone (TDZ) until their declaration is reached.
/**
 * 
const p = new Person();
class Person {}
output: ReferenceError: Cannot access 'Person' before initialization
*/

// Difference between hoisting and initialization.
// Difference between declaration and assignment.


// Explain var hoisting.
// var is hoisted and initialized with undefined

// Explain let hoisting.
// let is hoisted but not initialized


// Explain const hoisting.
// const is hoisted but not initialized

// What is the Temporal Dead Zone (TDZ)?
// the tdz is the time between variable declaration and initialization


// Why does TDZ exist?
/* TDZ prevents the use of variables before they are initialized.

Benefits:
Avoids bugs
Makes code predictable
Prevents accidental access
*/

// Can const be reassigned?
// const cannot be reassigned once initialized

// Why does let throw a ReferenceError?
// Because it exists in the TDZ until its declaration is executed.


// Explain function expression hoisting.

/**
 * 
hello();

var hello = function () {
    console.log("Hello");
};



memory phase -  hello = undefined
execution phase - hello = function () { console.log("Hello"); }

output - TypeError: hello is not a function
*/

// Which function types are hoisted?
// function declarations are hoisted and function expression and arrow functions  and method inside object are not hoisted 

// // Why are function declarations fully hoisted?
// The JavaScript engine stores the entire function object in memory during the memory creation phase.
// So it is ready before execution starts.

// // What happens when calling a function before declaration?
// They cannot be called before initialization because the variable holding the function is either:

// in the TDZ (let/const) → ReferenceError
// undefined (var) → TypeError


// What happens with arrow functions before initialization?
// Arrow functions are hoisted but the variable they are assigned to is in the TDZ until the declaration is reached. Therefore, they cannot be called before initialization.


// Explain memory allocation during hoisting.
var a = 10;

let b = 20;

function test(){}
/**
 
a → undefined
b → <uninitialized>
test → function object

*/
// Difference between memory creation and execution.
/**
 * 
Memory Creation Phase	                                                               Execution Phase
Creates the Global Execution Context.	                                                Executes code line by line.
Allocates memory for variables and functions.	                                        Assigns values and evaluates expressions.
var → undefined; let/const → uninitialized; function declarations → full function   	Variables receive assigned values; function calls run.

*/

// Explain compile phase.
/**
 
JavaScript engines conceptually perform work before execution:

Parse the code.
Check syntax.
Build an internal representation (such as an Abstract Syntax Tree).
Prepare scope information and declarations.

Modern engines may optimize this process, but it's useful to think of it as the preparation stage before execution.
 */

// Explain execution phase.
// The engine executes code from top to bottom.

// What errors are caused by hoisting?
/**
 * 
console.log(x);
let x = 10;
reference error



hello();

var hello = function(){};
type error
*/

// Explain undefined vs ReferenceError.
/**
 * 
undefined	                                                                       ReferenceError
Variable exists but has no value yet.	                              Variable cannot be accessed in the current scope (for example, because it is in the TDZ or not declared).
Common with var before assignment.	                                 Common with let, const, and class before initialization
*/

// // Explain initialization timing.
// var: initialized to undefined during the memory creation phase.
// let / const: initialized only when execution reaches their declaration.
// Function declarations: initialized with the complete function during the memory creation phase.

