

// Sum of first N numbers.
let sum = 0, num =120;

for(let i=1 ; i<=num ; i++){sum += i;} 
console.log(sum);


// Product of first N numbers.

 let product = 1; let num1= 10;

for(let i=1 ; i<=num1; i++)
{ product *= i;   
} 
console.log(product);

// Count digits.

let count = 0, num2 = 12345;


while(num2 > 0){
num2 = Math.floor(num2 / 10);
    count++; 
}
console.log(count);


// Reverse number.
let reversed = 0, num3 = 12345;

while(num3 > 0){
    reversed = reversed * 10 + num3 % 10;
    num3 = Math.floor(num3 / 10);
}




// Check palindrome number.
let num5 = 12321;    
let org = num5;
let rev = 0;


for(let i = 0; i < num5; i++){
    rev = rev * 10 + num5 % 10;
    num5 = Math.floor(num5 / 10);
}
console.log(org === rev && num5 > 1 ? "Palindrome" : "Not Palindrome");

// Check prime number.
let num4 = 7;
let isPrime = true;

for(let i = 2; i < num4; i++){
    if(num4 % i === 0){
        isPrime = false;
        break;
    }
}

if(isPrime && num4 > 1){
    console.log("Prime");
}else{
    console.log("Not Prime");
}
// Sum of digits.
   let sumOfDigits = 0, num6 = 12345;
while(num6 > 0){

    sumOfDigits += num6 % 10;
    num6 = Math.floor(num6 / 10);
}

// Largest digit.

let largestDigit = 0, num7 = 12345;

while( num7 > 0){

largestDigit = Math.max(largestDigit, num7 % 10);
num7 = Math.floor(num7 / 10);

}
console.log(largestDigit);



// Smallest digit.


let num8 = 12345, smallestDigit = Number.MAX_VALUE;
for(let i = 0; i < num8; i++){
    smallestDigit = Math.min(smallestDigit, num8 % 10);
    num8 = Math.floor(num8 / 10);

}
console.log(smallestDigit);

// Count even digits.
let countEvenDigits = 0, num9 = 12345;

for(let i = 0; i < num9; i++){
    if(num9 % i === 0){ countEvenDigits++; }
    num9 = Math.floor(num9 / 10);

}
console.log(countEvenDigits)

// Print squares 1–20.
for(let i = 1; i <= 20; i++)
{
console.log(`  ${i} ::  ${i**2}`);

}
// Print cubes 1–20.

for(let i = 1; i <= 20; i++)
{
console.log(`  ${i} ::  ${i**3}`);

}


// Find factorial.

let  fa = 1 , n= 6;
for(let i=1 ; i<=n ; i++)fa = fa*i;
console.log(fa);

// Find power.


let base = 2, exponent = 5, power = 1;
for(let i = 1; i <= exponent; i++)power *= base;
console.log(power);


// Find GCD.

let num10 = 36, num11 = 60, gcd = 1;

for(let i = 1; i <= num10 && i <= num11; i++){
    if(num10 % i === 0 && num11 % i === 0){
        gcd = i;
    }
}
console.log(gcd);


// Intermediate
// Find LCM.
let num12 = 18, num13 = 27;

let max = Math.max(num12, num13);

while (true) {
    if (max % num12 === 0 && max % num13 === 0) {
        console.log("LCM is:", max);
        break;
    }
    max++;
}

// Print primes 1–100.

for(let i=2 ; i<=100 ; i++){
let isPrime = true;
for(let j=2 ; j<i ; j++){
    if(i % j === 0){
        isPrime = false;
        break;
    }
}   
if(isPrime)console.log(i);
}


// Fibonacci series.
let a = 0, b = 1, c = a + b;
for(let i = 0; i <= 10; i++)
{ 
console.log(c);
c = a + b;
a = b;
b = c;
}

// Armstrong number. An Armstrong number is a number equal to the sum of its digits raised to the power3 of the total number of digits.
    let num14 = 153, sumOfCubes = 0;

    let temp = num14;
    while (temp > 0) {
    sumOfCubes += Math.pow(temp % 10, 3);
    temp = Math.floor(temp / 10);
}
console.log(sumOfCubes == num14 ? "Armstrong" : "Not Armstrong");

// Strong number.Sum of the factorials of the digits equals the original number.

let num15 = 145, sumOfFactorials = 0;
let temp1 = num15;

while (temp1 > 0)
{  
    
    function factorial(n) {
        let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

temp1 = Math.floor(temp1 / 10);
sumOfFactorials  +=  factorial(temp1 % 10);
}

console.log(sumOfFactorials == num15 ? "Strong" : "Not Strong");

// Perfect number. Sum of all proper divisors (excluding the number itself) equals the original number.
let num16 = 28, sumOfDivisors = 0;

for( let i = 1; i < num16; i++)  
{
if(  num16 % i === 0){
sumOfDivisors += i; }
}
console.log(sumOfDivisors == num16 ? "Perfect" : "Not Perfect");


// Neon number.
let n1 = 5;
let temp2 = n1*n1 , digit = 0;

while(  temp2>0){
digit +=   temp2 % 10;
temp2 = Math.floor(temp2 / 10);
}  console.log(digit == n1 ? "Neon" : "Not Neon");




// Automorphic number. A number whose square ends in the same digits as the number itself.
let num19 = 25;
let square = num10 * num10;
let temp9 = num10;
let flag = true;

while (temp9 > 0) {
    if (temp9 % 10 !== square % 10) {
        flag = false;
        break;
    }

    temp9 = Math.floor(temp9 / 10);
    square = Math.floor(square / 10);
}

console.log(flag ? "Automorphic" : "Not Automorphic");


// Harshad number.  A Harshad number is a number that is divisible by the sum of its digits.
let num20 = 14;
let sumOfDigits1 = 0, temp4 = num20;

while( temp4 > 0)
{  sumOfDigits1 += temp4 % 10;
    temp4 = Math.floor(temp4 / 10);
}
console.log( num20%sumOfDigits1 === 0 ? "Harshad" : "Not Harshad");

// Print star pattern.

// Print pyramid pattern.
n = 5; 
 let starPattern = "";
for( let i=0; i<n; i++){ 
for( let j=0; j<n*2-1; j++){ 
if(j>=n-i-1 &&  j<=n+i-1){
    starPattern += '*';
}else {
    starPattern += ' ';
}
}
starPattern += '\n';
}

console.log(starPattern);

// Print inverted pyramid.

n = 5; 
 let starPatterne = "";
for( let i=n-1; i>=0; i--){ 
for( let j=n*2-1; j>=0; j--){ 
if(j>=n-i-1 &&  j<=n+i-1){
    starPatterne += '*';
}else {
    starPatterne += ' ';
}
}
starPatterne += '\n';
}

console.log(starPatterne);



// Print diamond pattern.


// Hollow square pattern.
// Hollow triangle pattern.
// Floyd's triangle.
// Pascal's triangle.
// Number pyramid.
// Alphabet pyramid.



// Count vowels in string.
let str = 'Hello World'
 c=0; 

for(let ch of str){

    if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' || ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U')
        c++;
}
console.log(c);

// Count consonants.

let str2 = 'Hello World'
let c1=0; 

for(let ch of str2){
    if(ch !== 'a' && ch !== 'e' && ch !== 'i' && ch !== 'o' && ch !== 'u' && ch !== 'A' && ch !== 'E' && ch !== 'I' && ch !== 'O' && ch !== 'U')
        c1++;
}
console.log(c1);



let vowels = 0;
let consonants = 0;

let vowel = "aeiouAEIOU";

for (let ch of str) {

    if (vowel.includes(ch)) {
        vowels++;
    }

    else if (
        (ch >= 'a' && ch <= 'z') ||
        (ch >= 'A' && ch <= 'Z')
    ) {
        consonants++;
    }
}

console.log(vowels);
console.log(consonants);

// Reverse string.

let str3 = 'Hello World';
let reversedStr = '';

for (let i = str3.length - 1; i >= 0; i--) {
    reversedStr += str3[i];
}

console.log(reversedStr);

let str4 =[...str3].reduce((acc , ch) =>  ch + acc , '');

console.log( 'Reversed String:', str4);



// Check palindrome string.
let str5 = 'racecar';

let tempStr = str5;

let ans =  [...tempStr].reduce((acc , ch) =>  ch + acc , '');
console.log(ans === tempStr ? "Palindrome" : "Not Palindrome");


// Frequency of characters.
let str6 = 'Hello World';

let freq = {};
for(  let ch of str6){
 
freq[ch] = (freq[ch] || 0) + 1;

}

console.log(freq);


// Remove duplicates from string.
let str7 = 'Hello World';
let s= '';
for(let ch of str7)
{  
    if(!s.includes(ch))
        s += ch;
}

console.log(s);

// Print all substrings.
 str = "hello";

for (let i = 0; i < str.length; i++) {

    for (let j = i + 1; j <= str.length; j++) {

        console.log(str.substring(i, j));
    }
}


// Find longest word.
 str = "JavaScript is a powerful programming language";

let longest = str
    .split(" ")
    .reduce((longest, word) =>
        word.length > longest.length ? word : longest
    );

console.log(longest);


// Find shortest word.
 str = "JavaScript is a powerful programming language";

let shortest = str
    .split(" ")
    .reduce((longest, word) =>
        word.length < longest.length ? word : longest
    );

console.log(shortest);


// Find most repeated character.
 str = "javascript programming language"; 
  let prev = 0; let count1 = 0;
  let mostRepeatedChar = '';
for( let i = 0 ; i<str.length ; i++){
for( let j = 0 ; j<str.length ; j++){
    if(str[i] === str[j])
        count1++;
}  
    if (count1 > prev) {
        prev = count1;
        mostRepeatedChar = str[i];
    }
count1 = 0;
}


console.log(mostRepeatedChar);


// Solve way 2

let obj = {};

obj = str.split("").reduce((acc, ch) => {
    acc[ch] = (acc[ch] || 0) + 1;
    return acc;
}, {});
max  = 0; 
for( let key in obj){
if( obj[key] > max){
    max = obj[key];
    mostRepeatedChar = key;
}
}


// Bubble sort.



// Selection sort.
// Insertion sort.
// Binary search.
let arr = [1, 2, 4, 8, 9 , 14];
let target = 9;
let st =0 , end = arr.length - 1;
while( st <= end){
mid = st + Math.floor((end - st) / 2);
if( arr[mid] === target){
    console.log("Found at index:", mid);
    break;
}else if ( arr[mid] >  target) {
    end = mid - 1;
}else {
    st = mid + 1;
}

}


// Find second largest.

let max1  = arr[0];
let max2 = arr[0];
for( let i = 1; i < arr.length; i++){
if( max1 <  arr[i]){
max2  = max1; 
max1 = arr[i];
}
}
console.log(max2);


// Find second smallest.
 arr = [1, 2, 4, 8, 9, 14];

let min1 = Number.MAX_VALUE;
let min2 = Number.MAX_VALUE;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] < min1) {
        min2 = min1;
        min1 = arr[i];
    }
    else if (arr[i] < min2 && arr[i] !== min1) {
        min2 = arr[i];
    }
}

console.log("Smallest =", min1);
console.log("Second Smallest =", min2);



// Find duplicates in array.
let  DupArr = [1, 2, 4, 8, 9 , 14, 2, 5, 14];
obj = {};
let duplicates = [];
for( let  i of DupArr){
obj[i] = (obj[i] || 0 ) + 1;
}

for( let key in obj){
    if( obj[key] > 1){
        duplicates.push(key);
    }
}

console.log(duplicates);
// Find missing number.

arr = [1, 2, 4, 8, 9 , 14, 16, 18, 20];

for( let i =0  ; i<arr.length; i++){
if(!arr.includes(i+1))
console.log(i+1);
}

// Rotate array by K positions.

















/*

| Method        | Purpose                |
| ------------- | ---------------------- |
| `push()`      | Add at end             |
| `pop()`       | Remove last            |
| `shift()`     | Remove first           |
| `unshift()`   | Add first              |
| `slice()`     | Copy part of an array  |
| `splice()`    | Add/remove elements    |
| `sort()`      | Sort array             |
| `reverse()`   | Reverse array          |
| `map()`       | Transform elements     |
| `filter()`    | Filter elements        |
| `reduce()`    | Accumulate values      |
| `find()`      | First matching element |
| `findIndex()` | Index of first match   |
| `some()`      | At least one matches   |
| `every()`     | All match              |
| `includes()`  | Check existence        |
| `indexOf()`   | Find index             |
| `forEach()`   | Iterate                |
| `flat()`      | Flatten nested arrays  |
| `concat()`    | Merge arrays           |

*/

