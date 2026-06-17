// Write a program that takes total_bill as input.
// If total_bill > 1000, print "You get a 20% discount".
// If total_bill > 500, print "You get a 10% discount".
// Otherwise, print "No discount available".


// let total_bill = parseInt(prompt("Enter the total bill amount: "));
let total_bill = 1200;
if (total_bill > 1000) {console.log("You get a 20% discount");
} else if (total_bill > 500) {console.log("You get a 10% discount");
} else {console.log("No discount available");}

// 2. Write a program to check whether a number is even or odd. Input a number and print whether it's even or odd using if...else.

let number2 = 5;
if (number2  % 2 === 0) {
  console.log(`${number2} is even`);
} else {
  console.log(`${number2} is odd`);
}


// 6. Write a program that checks a student’s marks and prints the grade.
// Marks >= 90: Grade A
// Marks >= 75: Grade B
// Marks >= 50: Grade C
// Otherwise: Fail

// let marks = parseInt(prompt("Enter the student's marks: "));
let marks = 85;
if (marks >= 90) {console.log("Grade A");
} else if (marks >= 75) {console.log("Grade B");
} else if (marks >= 50) {console.log("Grade C");
} else {console.log("Fail");}




// 7. Write a program that checks if a number is divisible by 2 and 3.
// let number = parseInt(prompt("Enter a number: "));
let numbers = 15;
if (numbers % 2 === 0 && numbers % 3 === 0) {
  console.log(`${numbers} is divisible by both 2 and 3`);
} else {
  console.log(`${numbers    } is not divisible by both 2 and 3`);
}
