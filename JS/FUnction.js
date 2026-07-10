// What is a function in JavaScript?
// ans  -- function is a block of code  that performs a specific task    function_name()  instead of writing the code again and again we can use the function

// Why do we use functions?
//   because we can reuse the code multiple times  and it can enhance code reuseability and variability and also it can make code more readable and maintainable   function_name()  instead of writing the code again and again we can use the function  

// What are the advantages of using functions?
// ans -- functions provide better modularity for your app and a high degree of code reusing and it can make code more readable and maintainable

// How do you declare a function?
// using function keyword and write the code inside it 

// How do you call a function?
// by using function_name()


// What is the difference between a function declaration and a function call?
// function declaration  there we can define a function and then we can call it   
// function call() there we can define a function and  after then we can call it  then our function  execute    
// Declaration creates the function, while a call executes it.

// What is the syntax of a function declaration?
function name() {

    return 0;
}

// What is the syntax of a function expression?
// a function expression  is a function that is assigned to a variable 
let func = function () {
    return 0;
};

// What are parameters?
// a parameter is a variable that is used to pass data into a function. It is a placeholder for the value that will be passed to the function when it is called.


// What are arguments?
// Arguments are the actual values passed when calling a function.

// Difference between parameters and arguments.
// Parameters are variables that are used to pass data into a function. They are defined within the parentheses () after the function name.
// Arguments are the actual values passed when calling a function.


// What is a return statement?
// ans -- a return statement is used to end a function and optionally pass back a value from the function to the caller.

// What happens if a function doesn't return anything?
// ans -- if a function doesn't return anything then it js  returns undefined

// Can a function return multiple values?
// no  -- a function can return only one value
// To return multiple values, wrap them in an object or array.
function getData() {
    return [10, 20];
}

const [a, b] = getData();

// What is a default parameter?

// A default parameter is a parameter that is given a default value if no argument or undefined is passed.
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

// What are rest parameters?
// Rest parameters collect remaining arguments into an array.
function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}
// Rest parameters must be the last parameter in the function definition.


// What is the spread operator in function calls?
// The spread operator in function calls allows an iterable to be expanded in places where zero or more arguments are expected.
// The spread operator (...) expands an array or iterable into individual values.
function add(a, b, c) {
    return a + b + c;
}
const arr = [1, 2, 3];
console.log(add(...arr));

// Difference between function declaration and function expression.
// ans -- function declaration is when you declare a function before using it  and function expression is when you assign a function to a variable
function declaration() {
    console.log("This is a function declaration");
}  
// function declaration()  sapport hoisting  


// function expression()  does not support hoisting 
let expression = function () {
    console.log("This is a function expression");
}

// What is an anonymous function?
// ans -- an anonymous function is a function without a name  Mostly used as callbacks.
setTimeout(function () {
    console.log("This is an anonymous function");
}, 1000);


// What is a named function expression?
// ans -- A function expression that has its own name.  mostly used in recursion
let namedExpression = function named() {
    console.log("This is a named function expression");
}


// What is an arrow function?
// Introduced in ES6. It provides a more concise syntax for writing function expressions.  its a short syntax for writing function expressions
// short form  ---  const add = (a, b) => a + b;  
// const square = x => x * x;

// Difference between normal functions and arrow functions.


// When should you use arrow functions?
//  in map and filter reduce callback promises
const nums = [1,2,3];

const doubled = nums.map(n => n * 2);

// When should you avoid arrow functions?
// in Object methods, Constructors, Prototype methods, Event handlers needing this  


// What is an Immediately Invoked Function Expression (IIFE)?
// Immediately Invoked Function Expression.
// Runs immediately after creation.
(function () {
    console.log("Hello");
})();

// Arrow version

(() => {
    console.log("Hello");
})();
9.

 // Why are IIFEs used?
// efore ES6 modules they were used for
// Creating private variables
// Avoiding global pollution
// Running initialization code immediately

// (function () {
//     let secret = "123";
// })();

// Cannot access
// console.log(secret);



// What is a callback function?


// What is a higher-order function?
// Explain first-class functions.
// Explain first-class citizens in JavaScript.


// Can functions be passed as arguments?
// yes functions can be passed as arguments


 function fun(){

    console.log('I am a function');
 }


 
 function execute(fun){
console.log( 'receiver function ');
fun();
 }

 execute(fun);




// Can functions return other functions?
// Yes, functions can return other functions.

function firstFun() {
    
    return function () {
        console.log("This is a function");
    };
}


const secondFun = firstFun();
secondFun();

// What are pure functions?
// A function that always returns the same output for the same input and has no side effects.  It does not modify any external state or variables.
function add(a, b) {
    return a + b;
}



// What are impure functions?
// Depends on outside data or changes something.

let total = 0;
function add(value) {
    total += value;
}


// What is function composition?
// Function composition is the process of combining two or more functions to produce a new function. The output of one function becomes the input of the next function.


const double = x => x * 2;

const square = x => x * x;

const result = square(double(5));

console.log(result);

// What is currying? (Introduction)
// Currying is the process of converting a function that takes multiple arguments into a sequence of functions, each with a single argument.
// f(a,b,c)  into f(a)(b)(c)
function add(a) {
    return function (b) {
        return a + b;
    };
}

console.log(add(2)(3));


// What is partial application?
// Fixing some arguments now and supplying the rest later is called partial application.

// What is memoization? (Introduction)


// What is tail recursion?
// Tail recursion is a recursion pattern where the recursive call is the final operation in the function, with no computation left after it returns.

// Difference between synchronous and asynchronous functions.
// A synchronous function executes one task at a time. The next line of code waits until the current task is finished.   
// An asynchronous function allows other code to run while waiting for a task (such as an API call, file read, or timer) to complete. It does not block the execution of the program.


console.log("Start");

setTimeout(() => {
    console.log("Hello");
}, 1000);

console.log("End");

// setTimeout() is asynchronous, so JavaScript schedules the callback and continues executing the remaining code


// What is lexical scope?
// What is a closure? (Introduction)

// Why are functions called reusable blocks?
// Functions let you write logic once and call it many times, which:
// Reduces code duplication
// Improves readability
// Makes maintenance easier
// Encourages modular code


// How does JavaScript execute functions?
// When a function is called:

// The JavaScript engine creates an Execution Context.
// The function is pushed onto the Call Stack.
// Local variables and parameters are initialized.
// The function executes line by line.
// After completion, it is removed (popped) from the Call Stack.


// Explain the call stack briefly.
// The Call Stack is a LIFO (Last In, First Out) data structure that tracks function calls.
function first() {
    second();
}

function second() {
    third();
}

function third() {
    console.log("Done");
}
/** Call Stack  

first();


Start:
Global

Call first():
Global
first

Call second():
Global
first
second

Call third():
Global
first
second
third

third finishes:
Global
first
second

second finishes:
Global
first

first finishes:
Global
*/




// Function returning an object.
// let obj = {name: "Nikesh", age: 22}
let person = function () {
    return {
        name: "Nikesh",
        age: 22
    };
};

console.log(person());

// Function returning an array.

 arr = [3, 'nikesh', null];
function getArray() {
    return arr;
}
console.log(getArray());
function getNumbers() {
    return [1, 2, 3, 4, 5];
}

// Pass a function as an argument.

function func() {
 console.log(' second function ')
}

function createCounter(func){

return func();

}

console.log(createCounter(func));

// Function returning another function.
// This demonstrates closures and higher-order functions.
function createCounter(msg) {

    return function (name) {
    return  `${msg} ${name}`
};
}
let sayhello =  createCounter("Hello");
console.log( sayhello("Nikesh"))


// Build a custom callback.
// A callback is a function passed into another function and executed later.

function fetchData(callback) {
  console.log("Fetching data...");

  callback("Data received");
}

function handleData(data) {
  console.log(data);
}

fetchData(handleData);



// Create a calculator using functions.
// using callback
function calculator(a, b, callback) {
  return callback(a, b);
}

function add(a, b) {return a + b;}  
function subtract(a, b) {return a - b;}
function multiply(a, b) {return a * b;}
function divide(a, b) {return a / b;}

console.log(calculator(5, 3, add));
console.log(calculator(5, 3, subtract));
console.log(calculator(5, 3, multiply));
console.log(calculator(5, 3, divide));



// Implement recursion for factorial.
let factorial = function func(n) {
    if (n === 0) return 1;
    return n * func(n - 1);
};
console.log(factorial(5));



// Implement recursion for Fibonacci.
// Flatten a nested array recursively.
// Deep clone recursively.
// Custom implementation of map().
// Custom implementation of filter().
// Custom implementation of reduce().
// Custom implementation of find().
// Custom implementation of every().
// Custom implementation of some().
// Custom implementation of forEach().
// Create a memoized function.
// Create a function composition utility.
// Build a pipe function.
// Implement currying for addition.
// Implement partial application.
// Implement debounce.
// Implement throttle.
// Build a once function.
// Build a retry function.
// Build a delay function.
// Create a logger wrapper.
// Create a timer utility.
// Build a caching function.
// Build a function to execute N times.
// Create a chainable calculator.
// Implement recursive object flattening.
// Recursive tree traversal.
// Build a custom event emitter.
// Function to compare objects.
// Function to validate input.
// Function to parse query strings.
// Function to serialize objects.
// Function to clone objects deeply.