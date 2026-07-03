// Level 1 — Easy (1–30)
// Print all elements.
var arr = [3, 6,4 , "string" , {name: 'nikes' , age :"22"}];
console.log(arr)
for(let val of arr ){
    console.log(val)
}

// Print array length.
console.log(arr.length);
// Find first element.
console.log(arr[0]);
// Find last element
console.log(  arr[arr.length-1]);
// Sum of array.
 arr = [9,3,6,2];
var sum =0 ;
for(let val of arr ){
    sum+= val;
}
console.log(sum);

// Average of array.
console.log( "avg : ",  sum /arr.length)
// Maximum element.

console.log( Math.max(...arr));
let maxval  = arr.reduce((acc, val ) => acc <val ? val : acc , arr[0]);
console.log(maxval);

// Minimum element.
console.log( Math.min(...arr));
let minval  = arr.reduce((acc, val ) => acc >val ? val : acc , arr[0]);
console.log(minval);

// Count even numbers.
arr = [1, 5,6,8,3]
let count  = arr.reduce( (acc, val ) => { return val%2 === 0 ? acc+1:acc},0);

console.log( 'count even  = ',count)


// Count odd numbers.

 count = arr.reduce((acc, val) => {
    return val % 2 != 0 ? acc + 1 : acc;
}, 0);
console.log( 'count odd  = ',count)

// Reverse array.
 
console.log( arr.reverse());


// Copy array.
let arrcopy  =  [...arr] ;
console.log(arrcopy)


// Merge two arrays.

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

merged = [...arr1, ...arr2];
var merged = arr1.concat(arr2);

console.log(merged);


// Remove duplicates.


const arr = [1, 2, 2, 3, 4, 4, 5];

const unique = [...new Set(arr)];
console.log(unique);



// sing splice() (In-place) ✅
let arr = [1, 2, 2, 3, 4, 4, 5];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            arr.splice(j, 1);
            j--; // Adjust index after deletion
        }
    }
}

console.log(arr);


// Count duplicates.
let arr = [1,2,2,3,4,4,4,5];

let map = new Map();

for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
}

for (let [key, value] of map) {
    if (value > 1) {
        console.log(key, "->", value, "times");
    }
}


// console.log([1,2]+[3,4]);

// Output

// "1,23,4"

// Reason

// Arrays become strings during +.




// Find second largest.
// Find second smallest.
// Swap first and last.
// Rotate left by one.
// Rotate right by one.
// Count positive numbers.
// Count negative numbers.
// Print only prime numbers.
// Find missing number.
// Find common elements.
// Find unique elements.
// Check if array is sorted.
// Sort ascending.
// Sort descending.
// Print alternate elements.



// | Question                    | Short Interview Answer                                                                             |
// | --------------------------- | -------------------------------------------------------------------------------------------------- |
// | `slice()` vs `splice()`     | `slice()` copies without changing the original; `splice()` changes the original array.             |
// | `map()` vs `forEach()`      | `map()` returns a new array; `forEach()` returns `undefined` and is used for side effects.         |
// | `filter()` vs `find()`      | `filter()` returns all matching elements as an array; `find()` returns the first matching element. |
// | `find()` vs `findIndex()`   | `find()` returns the value; `findIndex()` returns the index.                                       |
// | `reduce()`                  | Reduces an array to a single value (sum, object, max, etc.).                                       |
// | `sort()`                    | Sorts the array in place; default sorting is lexicographical (string-based).                       |
// | Why numeric `sort()` fails? | Numbers are compared as strings unless you provide a comparator like `(a, b) => a - b`.            |
// | Mutable methods             | `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`.                                    |
// | Immutable methods           | `map`, `filter`, `reduce`, `slice`, `concat`, `flat`, `flatMap`.                                   |
// | Time complexity             | `push()` **O(1)** average, `pop()` **O(1)**, `shift()` **O(n)**, `unshift()` **O(n)**.             |
// | Remove duplicates           | `[...]new Set(array)` (or `Array.from(new Set(array))`).                                           |
// | Flatten arrays              | `flat()` or `flat(Infinity)` for deeply nested arrays.                                             |
// | Merge arrays                | Spread operator (`[...a, ...b]`) or `concat()`.                                                    |
// | Shallow vs Deep copy        | Shallow copies share nested references; deep copies duplicate nested objects too.                  |
// | `some()` vs `every()`       | `some()` checks if **any** element matches; `every()` checks if **all** elements match.            |
