// Execution Context
// Creation Phase
// Execution Phase
// Call Stack

// 1. What is Execution Context?
/*
An Execution Context is the environment in which JavaScript executes code.
It contains everything the engine needs to run your code:
Variables
Functions
The value of this
Scope information

Think of it as a box where JavaScript keeps all the information required to execute a piece of code.
 */


// Types of Execution Context
/**

There are three types:
Global Execution Context (GEC)
Function Execution Context (FEC)
Eval Execution Context (rarely used)*/


// Global Execution Context (GEC)

/**
When a JavaScript program starts, the engine creates the Global Execution Context.
It is created only once.
Example
let a = 10;
function greet() {
    console.log("Hello");
}
console.log(a);
The JavaScript engine first creates the Global Execution Context before running any code.
*/


// Function Execution Context (FEC)
/**
Every time a function is called, JavaScript creates a new execution context for that function.
function greet() {
    console.log("Hello");
}
greet();
Calling greet() creates a Function Execution Context.
*/


// 2. Creation Phase (Memory Creation Phase)
/**
 * 
In this phase, JavaScript does not execute the code.
Instead, it prepares memory
It performs these tasks:

Creates memory for variables
Stores function declarations
Creates the scope chain
Determines the value of this
*/


// 3. Execution Phase
// Now JavaScript executes the code line by line.

// 4. Call Stack

/**
 * 
The Call Stack is a data structure that keeps track of which execution context is currently running.

It follows the LIFO (Last In, First Out) principle.

Think of it as a stack of plates:

*/

// How does JavaScript execute code?
/* 
A good answer is:
JavaScript creates the Global Execution Context.
The execution context enters the Creation Phase, where memory is allocated:
var is initialized to undefined.
let and const are hoisted but remain uninitialized (TDZ).
Function declarations are stored completely.
It then enters the Execution Phase, executing code line by line.
Whenever a function is called, a new Function Execution Context is created and pushed onto the Call Stack.
When the function finishes, its execution context is popped from the stack, and execution resumes in the previous context.
*/