// 🔹 If / Else (1–15)


//1  Write a program to check if a number is positive or negative.
 let n = 20 ; 
console.log(   ' value : ' , n  , "="  , n>0 ? 'positive number ' : ' nagative number' )
 n= -2; 
 console.log(   ' value : ' , n  , "="  , n>0 ? 'positive number ' : ' nagative number' )

// 2 . Compare two numbers and print the larger one.

let x = 10, y = 10;
console.log(x > y ? `${x} is greater`: x < y ? `${y} is greater` : "Both numbers are equal");

// 3 Check whether a given character is a vowel or consonant.

let char = 'a';
console.log(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ? `${char} is a vowel` : `${char} is a consonant`);

// 4 Check if a string is empty or not.

let str = 'str';
console.log( str === ''  ? 'String is empty' : 'String is not empty' )
str = '';
console.log(str.length === 0? 'String is empty': 'String is not empty'); // false 


// 5. Check if a password length is valid (≥ 8).

let password = 'Password123';
console.log(password.length >= 8 ? 'Password is valid' : 'Password is too short');


// Nested If / Else (16–25)

// 6. Find the largest of three numbers.

let  a =30 , b= 30, c= 30;

if(a> b && a> c){
    console.log(a + " a is the largest number");
}else {
if(b> c)  console.log(b + "b  is the largest number");
else console.log(c + " c is the largest number");
}

// using max function;

console.log(Math.max(a, b, c) + " is the largest number");


// 7 . Check grade based on marks (A, B, C, Fail).


let marks = 15;
if( marks >= 90 ) console.log(  'A' )
else if (marks >= 75) console.log('B')
else {
    if (marks >= 50) console.log('C')
    else console.log('Fail')
}


// 8 Check if a number is positive and even.

let num = 3 ;

console.log(   num> 0  && num % 2 === 0   ?  'positive and even' : 'not positive or even' )


// 9 . Check login credentials using username and password.

let username = 'admin';
let password1 = 'password123';
if (username === 'admin' && password1 === 'password123') {
  console.log('Login successful');
} else {
  console.log('Invalid credentials');
}



// 10 Determine ticket price based on age and gender.
let age = 18;
let gender = 'male';
if (age >= 65) {
  console.log('Ticket price: $5');
} else if (gender === 'female') {
  console.log('Ticket price: $7');
} else {
  console.log('Ticket price: $10');
}



// 11 Check eligibility for exam based on attendance and marks.
let marks1 = 75;
let attendance1 = 80;
if (marks1 >= 50 && attendance1 >= 75) {
  console.log('Eligible for exam');
} else {
  console.log('Not eligible for exam');
}


// 12 . Find the smallest of three numbers.


let num1 = 10, num2 = 20, num3 = 30;

if( num1  < num2 && num1 < num3)  
{
    console.log(num1 + " is the smallest number");
}
else if( num2  < num1 && num2 < num3)  
{
    console.log(num2 + " is the smallest number");
}
else
{
    console.log(num3 + " is the smallest number");
}



// 13 . Check if a number is divisible by 2, 3, or both.

let number = 15;
console.log(number % 2 === 0 && number % 3 === 0 ? 'Divisible by 2 and 3' : 'Not divisible by 2 and 3');



// 14 . Assign discount based on purchase amount.

let purchaseAmount = 200;

if( purchaseAmount >= 100 ) console.log('Discount of 10%');
else if( purchaseAmount >= 50 ) console.log('Discount of 5%');
else console.log('No discount');    

