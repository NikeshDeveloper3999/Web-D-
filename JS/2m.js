
// 1. Take any random input number, multiply it by 50, and print the result. 

let num =5 ;
console.log(num * 50);



/*prompt() browser ka function hai, JavaScript ka core feature nahi.
Browser me works karta hai
let name = prompt("Enter your name");
console.log(name);
Jab aap is code ko HTML page me run karte ho, browser popup dikha deta hai.  

const prompt = require("prompt-sync")();

let name = prompt("Enter your name: ");
console.log("Hello " + name);


*/


// 2. Write a JavaScript program to calculate the area of a rectangle (width = 5, height = 10). 

let width =5 , height = 10;
console.log('area of rectangle :'  , width * height)


// 3. Find and print the remainder when 25 is divided by 4. Also, use Math.floor(), Math.ceil(), and Math.random() to generate 3 OTP. 
console.log("Remainder:", 25 % 4);

console.log("Floor:", Math.floor(25 / 4));

console.log("Ceil:", Math.ceil(25 / 4));

// Three OTPs
console.log("OTP 1:", Math.floor(1000 + Math.random() * 9000));

console.log("OTP 2:", Math.floor(1000 + Math.random() * 9000));

console.log("OTP 3:", Math.floor(1000 + Math.random() * 9000));

console.log(Math.floor(4.9)); // 4
console.log(Math.ceil(4.1));  // 5
console.log(Math.round(4.5)); // 5

console.log(Math.max(10, 20, 30)); // 30
console.log(Math.min(10, 20, 30)); // 10

console.log(Math.abs(-100)); // 100
console.log(Math.sqrt(81));  // 9

console.log(Math.pow(2, 5)); // 32
console.log(Math.PI);        // 3.141592653589793
console.log(Math.trunc(8.99)); // 8



// 4. Write a program that takes a number, squares it, adds 10, and prints the result. 

let  number = 10 ;
console.log( ' result ' , Math.pow(number, 2) + 10);


// 5. Write a JavaScript program to calculate the area of a circle with radius = 7. Use Math. PI. 

let radius = 7;
console.log('Area of circle:', Math.PI * Math.pow(radius, 2));
let area = Math.PI * Math.pow(radius, 2);

console.log('Area of circle:', area.toFixed(2));  // Area of circle: 153.94
// Bahut interviewers ye poochte hain ki toFixed() string return karta hai ya number?
// Correct answer: String. ✅
console.log(typeof area.toFixed(2)); // String

// 6. Take two numbers and perform addition, subtraction, multiplication, and division. Print each result on a new line. 
 let n = 10 , m = 5; 
 console.log('Addition:', n + m);
 console.log('Subtraction:', n - m);
 console.log('Multiplication:', n * m);
 console.log('Division:', n / m);

// 7. Take an input number and increase it by 10%. Print the updated value. 

let n2 = 19;
let per=  n2/10;
console.log('10% of', n2, 'is:', per);
console.log( 'Updated value 2: ', n2+per) ;  // ans 

console.log('Updated value:', Math.ceil(n2 * 1.10 ));  // 21
console.log('Updated value:', Math.floor(n2 * 1.10 ));// 20.9


// 8. Write a program to convert temperature from Celsius to Fahrenheit. 
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32; // Correct formula for conversion
console.log(celsius + '°C is ' + fahrenheit + '°F');

// 9. Take a number and find its cube using the ** operator or multiplication. 

let numberc = 5;
console.log('Cube of', numberc, 'is:', numberc ** 3); // Cube of 5 is: 125  
// Cube ka matlab hai kisi number ko 3 baar multiply karna. 

// 10. Calculate the average of five numbers: 10, 20, 30, 40, 50. Print the result.  
let arr = [10, 20, 30, 40, 50];
let average = arr.reduce((acc, val) => acc + val, 0) / arr.length;


console.log('Average:', average);
let sum = 0;
for (let num of arr) { sum += num; }
let average1 = sum / arr.length;
console.log('Average:', average1);



// Step 2: Understanding reduce()

// Syntax:

// array.reduce((accumulator, currentValue) => {
//    // logic
// }, initialValue);

// Your code:

// arr.reduce((acc, val) => acc + val, 0)

// Here:

// acc = accumulator (sum store karta hai)
// val = current element
// 0 = initial value of accumulator




// minimu in array 

let arr2 = [10 ,30 , 40 ,60 ,3 , 20] 
console.log('Minimum value:', Math.min(...arr2)); // Minimum value: 3
var min = arr2.reduce((acc , val )=> acc < val ? acc : val , arr2[0])  // using reduce method 
console.log('Minimum value:', min);
min = arr2.reduce((acc , val )=>Math.min(acc , val) , arr2[0])  // using reduce method  WITH MATH.MIN
console.log('Minimum value with Math.min : ', min);



/// maximum of array 
let arr3 = [10 ,30 , 40 ,60 ,3 , 20 ,2,0, 99, 2] 
console.log('Maximum value:', Math.max(...arr3)); // Maximum value: 99
var max = arr3.reduce((acc , val )=> acc > val ? acc : val , arr3[0])  // using reduce method 
console.log('Maximum value:', max);
max = arr3.reduce((acc , val )=>Math.max(acc , val) , arr3[0])  // using reduce method  WITH MATH.MAX
console.log('Maximum value with Math.max : ', max);



// count frequency of elements in array

let arrF = ["a", "b", "a", "c", "a" , "d"];

let count = arrF.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});

console.log(count); 



// 8. Convert Array to Object

let users = [{ id: 1, name: "Nikesh" }, { id: 2, name: "Rahul" }, { id: 3, name: "Priya" }];
let obj = users.reduce((acc, user) => {acc[user.id] = user.name;
  return acc;
}, {});

console.log(obj);

// Check if variable is undefined. 

let a = 8; 

console.log(a === undefined)

// Check if variable is null.
 a = null; 

console.log(a === null)


// Print all primitive types.
let numberTy = 10 ;
let bty = false;
let cty = "string";
let dty = null;
let e = undefined;
let f = Symbol(); 
let g = BigInt(10);


// Print all non-primitive types.
let arr1 = [1, 4]
let obj1 = { a: 1, b: 2 }
let fn = function() { return 1; }
let date = new Date();


//Convert boolean to string. 
let bool = true;
console.log(String(bool)); // "true"
console.log(bool.toString()); // "true"


// Parse user input.
// parseInt() converts a string into an integer number.
let userInput = "123";
 num = parseInt(userInput);
console.log(num); // 123


// Validate age input.
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Convert Fahrenheit to Celsius.

let fahrenheit1 = 77;
let celsius1 = (fahrenheit1 - 32) * 5/9;
console.log(celsius1); // 25.0

// 2. Create Immutable Object

// An immutable object cannot be modified after creation.

// Method 1: Object.freeze()

const user = Object.freeze({
  name: "John",
  age: 25
});

user.age = 30;

console.log(user.age); // 25



// 3. Seal Object

// Object.seal() allows updating existing properties but prevents adding or deleting properties.

const user = {
  name: "John",
  age: 25
};

Object.seal(user);

user.age = 30;      // Allowed
user.city = "Bhopal"; // Not Allowed
delete user.name;     // Not Allowed

console.log(user);
