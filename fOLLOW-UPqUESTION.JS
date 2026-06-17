/*
What is the difference between concatenation and template literals?

Concatenation uses +:
console.log("Hello " + name);
Template literals use backticks ` and ${}:
console.log(`Hello ${name}`);

Template literals are generally preferred in modern JavaScript because they are cleaner and easier to maintain.
*/


/*
Interview Question:
Many interviewers ask: "Is null an object?"
console.log(typeof null);
Output: object
This is a historical bug in JavaScript. Even though typeof null returns "object", null is still considered a primitive data type.
 * /


| Method          | What it does                                                           | Example              | Output              |
| --------------- | ---------------------------------------------------------------------- | -------------------- | ------------------- |
| `Math.floor()`  | Number ko neeche wale nearest integer par round karta hai              | `Math.floor(4.9)`    | `4`                 |
| `Math.ceil()`   | Number ko upar wale nearest integer par round karta hai                | `Math.ceil(4.1)`     | `5`                 |
| `Math.round()`  | Number ko nearest integer par round karta hai                          | `Math.round(4.5)`    | `5`                 |
| `Math.random()` | 0 (inclusive) se 1 (exclusive) ke beech random decimal number deta hai | `Math.random()`      | `0.7345...`         |
| `Math.max()`    | Sabse bada number return karta hai                                     | `Math.max(10,20,30)` | `30`                |
| `Math.min()`    | Sabse chhota number return karta hai                                   | `Math.min(10,20,30)` | `10`                |
| `Math.abs()`    | Absolute (positive) value return karta hai                             | `Math.abs(-50)`      | `50`                |
| `Math.sqrt()`   | Square root nikalta hai                                                | `Math.sqrt(64)`      | `8`                 |
| `Math.pow()`    | Power calculate karta hai                                              | `Math.pow(2,3)`      | `8`                 |
| `Math.PI`       | π (Pi) ki value deta hai                                               | `Math.PI`            | `3.141592653589793` |
| `Math.trunc()`  | Decimal part hata deta hai                                             | `Math.trunc(4.9)`    | `4`                 |


