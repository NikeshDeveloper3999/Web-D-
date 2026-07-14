// 1. Lexical Environment

/*
A Lexical Environment is an internal JavaScript structure that stores:
Variables and functions of the current scope.
A reference to the outer (parent) scope.


Think of it as:
Lexical Environment
├── Environment Record
└── Outer Environment Reference

Every execution context has its own lexical environment.

Example:

let name = "Nikesh";

function greet() {
    let age = 22;
    console.log(name);
}

greet();

There are two lexical environments:

Global Lexical Environment
Environment Record
------------------
name → "Nikesh"
greet → function

Outer Reference → null
greet() Lexical Environment
Environment Record
------------------
age → 22

Outer Reference
      ↓
Global Environment

When console.log(name) runs:

Is name in greet()? ❌
Look in the outer environment (global)? ✅
Found "Nikesh"

*/

// 2. Environment Record

/**
 
An Environment Record is the part of the lexical environment that stores the identifiers declared in the current scope.

It stores:
Variables (var, let, const)
Function declarations
Parameters

Example:
function sum(a, b) {
    let total = a + b;
}

The Environment Record for sum looks like:
Environment Record

a → value
b → value
total → value

It only stores data for the current scope.
*/


// | Term                            | Meaning                                                                                                           |
// | ------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
// | **Lexical Environment**         | The internal structure that contains the current scope's variables/functions and a reference to the parent scope. |
// | **Environment Record**          | Stores variables, functions, and parameters declared in the current scope.                                        |
// | **Outer Environment Reference** | A link to the parent lexical environment, enabling variable lookup through the scope chain.                       |



