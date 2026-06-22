// 🔹 Traditional For Loop (26–40)

// 1 . Print numbers from 1 to 10.

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// if want to print on single line so we can use string concatenation  because console.log by default end with \n
let result = "";
for (let i = 1; i <= 10; i++) {
    result += i + " ";    
}

console.log(result);

// 2 . Print even numbers from 1 to 50.`


for (let i = 0; i < 50; i++) {
    if (i % 2 === 0) {
      console.log(i , " ");
    }
}



// 3 . Print multiplication table of 5.
 
 for( let i=1  ; i<=10 ; i++ ){
console.log(5 + " * " + i + " = " + 5*i);
 }



//  4.  Find the sum of numbers from 1 to 100.
let sum=0; 
 for( let i=1  ; i<=100 ; i++ ){
sum+= i;
 }
 
 console.log(' sum of numbers from 1 to 100 is ' + sum);

//  interview Follow-up 1: Without Loop

// Use the formula:
// formula  -   Sum=n(n+1)/2
sum = 100*(100+1)/2	// sum of numbers from 1 to 100



// 5 . Print numbers in reverse from 10 to 1.

let rev = '';
 for( let i=10  ; i>=1 ; i-- ){

    rev += i + " ";
 }

 console.log(rev);

// 6 . Count digits in a number using a loop.


let number = 12345;
let count = 0;

while(number > 0){
    count++;
    number = Math.floor(number / 10);
}

console.log('Number of digits: ' + count);


while(number > 1){
count++;
number = number/10;

}

console.log('Number of digits: ' + count);


// 7 . Print all multiples of 3 between 1 and 100.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}


// 8 . Calculate factorial of a number. 

let factorial = 1; 
let num  = 5;
 for( let i=1 ; i<=num ; i++ )
{  
factorial = factorial * i;
}
console.log('Factorial of ' + num + ' is ' + factorial)


// 9 . Print squares of numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
  console.log(i + " * " + i + " = " +   Math.pow(i,2));
}

// 10 . Print Fibonacci series up to 10 terms.

let n = 10;

let a = 0;
let b = 1;
console.log(a);
console.log(b);

for (let i = 2; i < n; i++) {
    let c = a + b;
    console.log(c);

    a = b;
    b = c;
}
// 0 1 1 2 3 5 8 13 21 34



//11 Print each character of a string using a loop.

 let str  = 'string';
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
//   console.log(str.charAt(i)); also support
console.log(typeof str.charAt(i));
}

// for of loop 
for (const ch of str) {
    console.log(ch);
}

// 12  Find sum of digits of a number.

sum =0 ; 
let num3 = 12345;

while(num3>0 ){

sum += num3 % 10;
num3 =  Math.floor(num3 / 10);
}
console.log(sum);



// 13 Check if a number is prime.
 

  num = 30;

if (num <= 1) {
  console.log(num + " is not a prime number");
} else {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  console.log(
    isPrime ? num + " is a prime number" : num + " is not a prime number"
  );
}



// for…in Loop

// 14 Print all keys of an object. 
let obj1  = { name: "John", age: 30, city: "New York" }
for (const key in obj1) {
  console.log(key);
}


// 15 Print all values of an object.
 obj1  = { name: "John", age: 30, city: "New York" }
for (const key in obj1) {
  console.log(obj1[key]);
}


let values = Object.values(obj1);

for (let value of values) {
  console.log(value);
}

// 16 Print key–value pairs of an object.

 obj1  = { name: "John", age: 30, city: "New York" }
for (const key in obj1) {
  console.log(key + ": " + obj1[key]);
}

// 17 Count number of properties in an object. 
 obj1  = { name: "John", age: 30, city: "New York" }
console.log(Object.keys(obj1).length);

 count = 0;

for (let key in obj1) {
  count++;
}

console.log(count);


 // 



