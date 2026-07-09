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
