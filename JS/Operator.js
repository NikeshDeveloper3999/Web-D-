// // Beginner   question 
// 1 Add two numbers.
  let a = 10 , b = 20 ; 
  console.log(   ' add two number' ,  a+b  );

// 2 Subtract two numbers.

  console.log(   ' sunstract two number' ,  a-b  );

// 3 Multiply two numbers.
console.log(   'multiply two number' ,  a*b  );

// 4 Divide two numbers.

  console.log(   ' divide two number' ,  a/b  );
// Find remainder.

console.log(   ' reminder  two number' ,  a%b  );

// Calculate square.
  console.log(   ' squre of a : 10  =>  ' ,   a**2 );

// Calculate cube.
console.log(   ' cube of a 10 => ' ,  a**3  );

// Swap two numbers.

console.log( `swap two number : before : ${a }  and  :${b}     `);
a = 10 , b = 20 ; 
temp = a;
a=b, b= temp;
console.log( `swap two number : after swaping  : ${a }  and  :${b}  `);


// Increment a variable.

let c =10 ;
console.log( `before increment  : ${c}    after increment  : `  , c++ );

// Decrement a variable.
console.log( `before dicrement  : ${c}    after dicrement   : `  , c-- );
// Check if number is even.

console.log(  `even check number  ${c}` , c%2==0    );

// Check if number is odd.


console.log(  `odd check number  ${c}` , c%2!=0    );
// Check if number is positive.

console.log(  `check positive ${c}` , c>0    );

// Check if number is negative.
c= -3;
console.log(  `check nagative  ${c}` , c<0    );

// Find larger number.

let arr = [1, 4, 3, 78, 5];

let max = arr.reduce((acc, val) => {
  return acc > val ? acc : val;
}, arr[0]);

console.log(max); 


// Find smaller number.

let arr2 = [1, 4, 3, 78, 5];
let min =   arr2.reduce((acc , val ) =>{
return  acc < val ? acc : val;
}, arr2[0])
console.log(min); 

// Find maximum of 3 numbers.
a=10 , b=3, c=17;
let maxOfThree = (a, b, c) => {
  return Math.max(a, b, c);
};


console.log(maxOfThree(10, 5, 8));

// Find minimum of 3 numbers.

let minimumOfThree = (a, b, c) => Math.min(a, b, c);

console.log(minimumOfThree(10, 5, 8));

// Check divisibility by 5.

let isDivisibleBy5 = (num) => num % 5 === 0;
console.log(isDivisibleBy5(10)); 

// Check divisibility by 10.

let isDivisibleBy10 = (num) => num % 10 === 0;
console.log(isDivisibleBy10(10)); 

// Check triangle validity. 
// A triangle is valid if the sum of any two sides is greater than the third side.

let isTriangleValid = (a, b, c) => a + b > c && a + c > b && b + c > a;
console.log(isTriangleValid(3, 4, 5)); 

// // Check rectangle validity.  
// EXPLAIN: A rectangle is valid if:
// Length (l) > 0  &&  Breadth (b) > 0
// Rectangle: opposite sides are equal, length and breadth must be positive.
// Square: a special type of rectangle where length === breadth.

let isRectangleValid = (l, b) => l > 0 && b > 0 && l !== b;
console.log(isRectangleValid(5, 3)); 

// Check multiple of 9.

let isMultipleOf9 = (num) => num % 9 === 0;
console.log(isMultipleOf9(18)); 

// Calculate electricity bill.
let calculateElectricityBill = (units) => {
  return units * 5;
};

console.log(calculateElectricityBill(100)); 

// Calculate discount amount.
let calculateDiscountAmount = (price, discount) => price * (discount / 100);
console.log(calculateDiscountAmount(100, 10)); 
// Calculate GST.
let calculateGST = (amount, rate) => amount * (rate / 100);
console.log(calculateGST(100, 10)); 

// Calculate simple interest.

let calculateSimpleInterest = (principal, rate, time) => {
  return (principal * rate * time) / 100;
};
// Calculate compound interest.
let amount = 1000;
let calculateCompoundInterest = (principal, rate, time) => {
  return principal * (1 + rate / 100) ** time;
}; 

console.log(  Math.floor(calculateCompoundInterest(amount, 10, 2))  -  amount  );


// Find absolute value.

let findAbsoluteValue = (num) => Math.abs(num);
console.log(findAbsoluteValue(-5)); 


// Find truthy values in array.
let arr3 = [1, 0, false, true, '', 'hello', null, undefined]
let findTruthyValues = (arr) => arr.filter((value) => { return value; });
console.log(findTruthyValues(arr3)); 


// Find falsy values in array.
let findFalsyValues = (arr) => arr.filter((value) => !value);
console.log(findFalsyValues(arr3)); 


// Implement custom comparison function.
  let customComparison = (a, b) => {
    if (a === b) {
      return 'Equal';
    } else if (a > b) {
      return 'Greater';
    } else {
      return 'Smaller';
    }
  };

// Check character is vowel/consonant.
var isVowel = (char) => {
  return 'aeiouAEIOU'.includes(char);
};

var isConsonant = (char) => {
  return 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'.includes(char);
};

// Check alphabet or digit.

var isAlphabet = (char) => {
  return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(char);
};


var isDigit = (char) => {
  return '0123456789'.includes(char);
};


// Check uppercase/lowercase.

// any other solution for isLowercase
var isUppercase = (char) => {
  return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(char);
};

var isLowercase = (char) => {
  return char >= 'a' && char <= 'z';
};

var isLowercase = (char) => {
  return 'abcdefghijklmnopqrstuvwxyz'.includes(char);
};

isVowel('6'); // true 


// What does the includes() method do? It checks if a string contains a specified value and returns true if it does, otherwise false.
// // The includes() method works on strings and arrays. It checks if a string contains a specified value and returns true if it does, otherwise false.
// give me a example of array with includes 
// let arr4 = [1, 2, 3, 4, 5];
// console.log(arr4.includes(3)); // true



// Check weekday/weekend.
let day = "Sunday";
if (day === "Saturday" || day === "Sunday") {
  console.log("Weekend");
} else {
  console.log("Weekday");
}


// Check temperature category.

var temp = 30;

if (temp < 0) {
  console.log("Freezing weather");
} else if (temp >= 0 && temp <= 10) {
  console.log("Very cold weather");
} else if (temp >= 11 && temp <= 20) {
  console.log("Cold weather");
} else if (temp >= 21 && temp <= 30) {
  console.log("Normal temperature");
} else if (temp >= 31 && temp <= 40) {
  console.log("Hot weather");
} else {
  console.log("Very hot weather");
}



// Income tax calculator.

let calculateIncomeTax = (income) => {
  return income / 10;
};

console.log(calculateIncomeTax(10000));

// Discount calculator.

let calculateDiscount = (amount, discount) => amount *(discount / 100);
console.log(calculateDiscount(10000, 10));

// Login validation.


let username = "user123";
let password = "pass123";

if (username === "user123" && password === "pass123") {
  console.log("Login successful");
} else {
  console.log("Invalid username or password");
}


// Password strength checker.

let password1 = "pass123";
let regex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!]).{8,}$/;

if (regex.test(password1)) {
  console.log("Strong Password");
} else {
  console.log("Weak Password");
}


// BMI category.
let calculateBMI = (weight, height) => {
  let bmi = weight / (height * height);
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    return "Overweight";
  } else {
    return "Obesity";
  }
};


// Insurance eligibility.

