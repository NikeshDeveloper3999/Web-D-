// 1. Check if a number x is less than or equal to another number y. Print true or false.

let x = 10,
  y = 20;

if (x <= y) console.log(true);
else console.log(false);
// exp2 . using typeo
console.log(x <= y);

//  Write a program that takes a number and prints whether it's in the range: 0–5, 6–10, or 11–100.

let n = 20;

if (n >= 0 && n <= 5) console.log("Range 0-5");
else if (n >= 6 && n <= 10) console.log("Range 6-10");
else if (n >= 11 && n <= 100) console.log("Range 11-100");
else console.log("out of Range ");

// // 3. Write a JavaScript program to check whether a given year is a leap year.
// Divisible by 4 and not divisible by 100
// OR
// Divisible by 400
let year = 2020;
console.log((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);



// 4. Check whether a person's age is eligible for voting (age >= 18). Print an appropriate message.

let age = 30 ;
if(age >= 18) console.log("Eligible for voting");
else console.log("Not eligible for voting");

// option 2 solution 
console.log(age >= 18? "Eligible for voting": "Not eligible for voting");


// 5. Check if a student has passed (marks >= 33). Print "Pass" or "Fail".
let marks = 43;
console.log(  marks >= 33? "Pass": "Fail")

// 6. Check if a number is divisible by both 3 and 5. Print "FizzBuzz" if true.

let num = 15 ; 
console.log(  num%5 ==0  && num%3 == 0 ? "FizzBuzz" : "Not FizzBuzz" )

// Interview Follow-up: Full FizzBuzz

if (num % 3 === 0 && num % 5 === 0)console.log("FizzBuzz");
else if (num % 3 === 0)console.log("Fizz");
else if (num % 5 === 0)console.log("Buzz");
else console.log(num);

// 7. Declare two variables: one with value 10 (number) and another with value "10" (string). Compare them using  == and ===.


var a = 10;
var b = "10";

console.log(' a == b ' , a ==  b) ;
console.log(' a === b ' ,a === b) ;

// Common Interview Examples

0 == false      // true
0 === false     // false

null == undefined   // true
null === undefined  // false

"5" == 5       // true
"5" === 5      // false


// 8. Evaluate and print the result of 1 != 2. Explain why it is true or false.
console.log(1 != 2);


// 9. Predict and print the output of:
console.log("predict the output")
   console.log(1 != 2);
   console.log("Hero" != "hero");
   console.log(1 == false);
   console.log(0 === false); 
   console.log(true == "");
   console.log(undefined == false);
   console.log(true == "null");
    console.log(undefined == null);
console.log(1 == "null");
console.log(undefined == NaN);
console.log(1 == "1");


// | Expression           | Output  | Reason                                              |
// | -------------------- | ------- | --------------------------------------------------- |
// | `1 != 2`             | `true`  | 1 and 2 are different                               |
// | `"Hero" != "hero"`   | `true`  | JavaScript is case-sensitive                        |
// | `1 == false`         | `false` | `false` becomes 0, so `1 == 0`                      |
// | `0 === false`        | `false` | Value differs in type (`number` vs `boolean`)       |
// | `true == ""`         | `false` | `true` becomes 1, `""` becomes 0                    |
// | `undefined == false` | `false` | `undefined` is only loosely equal to `null`         |
// | `true == "null"`     | `false` | `"null"` converts to `NaN`, and `1 == NaN` is false |
// | `undefined == null`  | `true`  | Special JavaScript rule                             |
// | `1 == "null"`        | `false` | `"null"` → `NaN`, and `1 == NaN` is false           |
// | `undefined == NaN`   | `false` | Nothing is equal to `NaN`, not even `NaN` itself    |
// // | `1 == "1"`           | `true`  | `"1"` converts to number 1                          |
// common interviewer question is:

// Why is NaN == NaN false?

// Answer:

// NaN means "Not a Number".
// By JavaScript specification, NaN is not equal to any value, including itself.
// To check for NaN, use: console.log(Number.isNaN(NaN)); // true


//  | Expression           | Output  | Reason                                                                      |
// | -------------------- | ------- | --------------------------------------------------------------------------- |
// | `NaN == NaN`         | `false` | `NaN` is not equal to any value, including itself.                          |
// | `null == undefined`  | `true`  | Special JavaScript rule: `null` and `undefined` are loosely equal.          |
// | `null === undefined` | `false` | `===` checks both value and type. Types are different.                      |
// | `"" == 0`            | `true`  | `""` is converted to `0`, so `0 == 0`.                                      |
// | `false == 0`         | `true`  | `false` is converted to `0`, so `0 == 0`.                                   |
// | `[] == false`        | `true`  | `[]` becomes `""`, then `""` becomes `0`; `false` becomes `0`, so `0 == 0`. |


console.log(  5*5*2); // Output: 15



const obj = { 
  valueOf() {
    return 10;
  }
};
console.log(obj + 5);




