
// CRUD Operations

// How do you insert an element?

let arr1 = [ 10, 20, 30, 40, 50 ]  
arr1.push(60)
console.log(arr1)

// Difference between push() and unshift().
//  push can add on the end of the array and unshift can add on the start of the array
let arr = [ 10, 20, 30, 40, 50]  
arr.push(6)
console.log(arr)
arr.unshift(5)
console.log(arr)

// Difference between pop() and shift().
// pop can remove the last element of the array and shift can remove the first element of the array
let arr2 = [ 10, 20, 30, 40, 50]
arr2.pop()
console.log(arr2)
arr2.shift()
console.log(arr2)

// Difference between splice() and slice().

/* ❗ Splice () It is used to modify the original array by:  Adding elements Removing elements Replacing elements
  parameter   start	Index where operation starts
deleteCount	Number of elements to remove 
item1...itemN	Elements to insert
*/
 
let arr3 = [ 10, 20, 30, 40, 50]
arr3.splice(2, 1)   // delete element on 2 index 
console.log( 'after delete 2 index ' + arr3)    //  -- [ 10, 20, 40, 50 ]

arr3.splice(1, 3,) 
console.log( 'after delete 1 to 3 index  ' + arr3)    //  -- [ 10]


arr3.splice(2, 0, 31)   // add element on 2 index 
console.log( 'after add 30 on 2 index ' + arr3)    //  -- [ 10, 31]

arr3.splice(3, 0, 53 , 74 )
console.log( 'after add 53 and 74 on 3 index ' + arr3)    //  -- [ 10, 31, 53, 74 ]


// update element / replace element 
arr3.splice(1, 1, 30)
console.log( 'after replace 31 with 30 ' + arr3)    //  -- [10,30 ,53 ,74 ]

// delete element 2 index to all value  
arr3.splice(2,arr3.length - 1)
console.log( 'after delete element after 2 index  ' + arr3)    //  -- [10,30]

/* imp negative indexing  in splice    
10 20 30 40 50
 0  1  2  3  4
Negative
-5 -4 -3 -2 -1     */
arr = [ 10, 20, 30, 40, 50]
arr3.splice(-1, 1)
console.log( 'after delete  element  using negative indexing '  + arr)    //  -- [10,20,30,40]  // -1 means last element  exp length n = 5 -1 = 4  and indexing value is 50

// Insert Using Negative Index
arr = [10,20,30,40,50];

arr.splice(-1,1,100);
console.log( 'after insert 100 at last using negative indexing ' + arr); // [10,20,30,40,100]
arr.splice(-1,0 ,200) ; 
console.log( 'after insert 200 at last using negative indexing ' + arr); // [10,20,30,40,200,100]


// Add at Beginning
 arr = [3,4,5];

arr.splice(0,0,1,2);
console.log( 'after add at beginning ' + arr); // [1,2,3,4,5]

// Return Value  means store the removed element
let arr4 = [10,20,30];   
let removed = arr4.splice(1,2);
console.log( 'removed elements ' + removed); // [20,30]

arr4.splice(0,1,220);
console.log( 'after insert 220 at beginning :  ' + arr4)


// splice() returns a new array, but it copies object references (shallow copy), not deep copies.


// SLICE❗ 
// slice() is used to extract (copy) a portion of an array without modifying the original array. syntax: array.slice(start, end)

let arr0 = ["A", "B", "C", "D", "E"];


let result = arr0.slice(1, 4); //  4-1  output: [ 'B', 'C', 'D' ] // end index is exclusive
console.log(result);
console.log(arr);


let new_arr = arr0.slice() ;  //copy all value of array 
console.log( 'after copy all value of array ' + new_arr);

console.log(  arr0.slice(2)) // [ 'C', 'D', 'E' ] 2 index to end of index 
console.log(arr0.slice(-2)); // [ 'D', 'E' ]
console.log(arr.slice(-4,-1));   ///  Start = index 1  End = index 4 (excluded)

let str = 'nikesh' ;  
console.log(str.slice(1,4)); // ike 

// Difference between concat() and push(). ❗

// concat() combines two or more arrays (or values) and returns a new array. It does not change the existing arrays . 

arr1 = [1, 2];
arr2 = [3, 4];
result = arr1.concat(arr2);

console.log(result); // [1, 2, 3, 4]
console.log(arr1);   // [1, 2]
// Add Values
 let arr_concat = [1, 2];
 result = arr_concat.concat(3, 4); // [1, 2, 3, 4]
console.log(result); // [1, 2, 3, 4]



let a = [1];
let b = [2];
let c = [3];
console.log(a.concat(b, c)); // [1, 2, 3]`
 
// concat arr1 and arr2
 arr1 = [1, 2];
 arr2 = [3, 4];
result = arr1.concat(arr2);
console.log(result); // [1, 2, 3, 4]

// ✅push  adds a new element to the end of an array and returns the new length of the array.
arr1 = [1, 2];
arr1.push(3, 4);
console.log(arr1); // [1, 2, 3, 4]

// major difference 
 arr1 = [1, 2];
 arr2 = [3, 4];
arr1.push(arr2);

console.log(arr1); // [1, 2, [3, 4]]  arr2 is added as one element. 

// concat() is used to combine two or more arrays and returns a new array, while push() is used to add one or more elements to the end of an array and returns the new length of the array.
// so solution  is to use concat() when you want to combine arrays and push() when you want to add elements to the end of an array. and if we want to add arr using push() then we can use spread operator  example  - 

arr1 = [1, 2];
arr2 = [3, 4];
 let ree  =arr1.push(...arr2);;
console.log( 'using spread operator -  : ' + arr1); // 4


// Difference between indexOf() and includes().
// Both indexOf() and includes() are used to check whether an element exists in an array (or string), but they return different values and have different behavior.

console.log(arr0.indexOf("B")); // 1  It returns the first occurrence only. if duplicate elements are present, it returns the index of the first occurrence.
console.log(arr0.includes("B")); // true

arr = [1, 2, NaN];
/* includes() uses the SameValueZero comparison algorithm, where:
NaN === NaN   // false

SameValueZero(NaN, NaN)
// true
*/

console.log(NaN === NaN); // false 
console.log(arr.includes(NaN));




// Difference between find() and filter().

// find() returns the first element that satisfies the condition.  It returns the value of the first element that satisfies the condition, or undefined if no element is found.

let numbers = [10, 20, 30, 40, 50];

 result = numbers.find(num => num > 25);
console.log(result);

// Object with find
let users = [ { id: 1, name: "John" }, { id: 2, name: "Alice" },  { id: 3, name: "Bob" }];
let user = users.find(u => u.id === 2);
console.log(user);

// filter() returns all elements that satisfy the condition. It returns a new array containing all elements that satisfy the condition, or an empty array if no elements satisfy the condition.

result = numbers.filter(num => num > 25);
console.log(result);

let usersList = users.filter(u => u.id >= 2);
console.log(usersList);



//explain  findIndex() 
// findIndex() returns the index of the first element that satisfies the condition. It returns the index of the first element that satisfies the condition, or -1 if no element is found.
// Condition (callback function)	  Parameter	Callback function

let arr_index = [10, 20, 30, 40, 50];

let index = arr_index.findIndex(num => num > 25); // 2
console.log(index);


let useers = [
    {id:1, name:"John"},
    {id:2, name:"Alice"}
];

let index1 = useers.findIndex(u => u.id === 2); // 1
console.log(index1);

// Difference between reverse() and sort().

// reverse() Reverses the order of elements. It modifies the original array and returns the reversed array. It does not create a new array. 
console.log(arr_index.reverse());


// sort() sorts elements in ascending order. It modifies the original array and returns the sorted array. It does not create a new array.
console.log(arr_index.sort());


// Difference between shallow copy and deep copy.

// A shallow copy creates a new outer object/array, but nested objects or arrays are shared by reference.

// Example  of shallow copy

let obj1 = {
    name: "John",
  address: {city: "Delhi" }
};

let obj2 = { ...obj1 };

obj2.address.city = "Mumbai";
console.log(obj1.address.city);
console.log(obj2.address.city);

// let copy1 = [...arr];
// let copy2 = arr.slice();
// let copy3 = arr.concat();
// let copy4 = Object.assign({}, obj);
// let copy5 = { ...obj };


// A deep copy creates completely independent copies, including all nested objects.

// Example
 obj1 = { name: "John", address: {city: "Delhi"} };

let obj2 = structuredClone(obj1);


obj2.address.city = "Mumbai";

console.log(obj1.address.city);
console.log(obj2.address.city);


// structuredClone()  is a built-in JavaScript function that creates a deep copy of an object or array.



// B) for...of
// It directly gives array values.

// Syntax
// for (let value of arr) {
//     console.log(value);
// }

// forEach()
// Executes a callback for every array element.

// arr.forEach(function(value, index) {});

 arr = [10, 20, 30];
arr.forEach((value, index) => {
    console.log(index, value);
});


// When should you use forEach()? ❗

// Use forEach() when you only need to perform an action for each element and do not need to create a new array or stop the loop early

arr.forEach(num => {

   if (num === 3) return;
    console.log(num);
});


// Stops when callback returns true.  use -- some()

arr.some(num => {
 console.log(num);
return num === 3;
});



// Stops when callback returns false.   every()
arr.every(num => {
    console.log(num);
    return num < 3;
});


// Stops after finding the first matching element. use -- find()
let ans = arr.find(num => num > 3);
console.log(ans);



// 4. Difference between map() and forEach()
// map() creates a new array by applying a function to each element of the original array.
 arr = [1, 2, 3, 4, 5];
let newArr = arr.map(num => num * 2);
console.log(newArr);

newArr = arr.map(num => num * 2);
console.log(newArr);


// 5. Why is map() preferred over forEach() in React?

// React renders UI by transforming data into JSX. Since map() returns a new array, it is ideal for generating lists of components. forEach() returns undefined, so it cannot be used directly inside JSX.


// Using map() (Correct)
function App() {
    const fruits = ["Apple", "Banana", "Mango"];

    return (
        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    );
}


// Using forEach() (Incorrect)
function App() {
    const fruits = ["Apple", "Banana", "Mango"];

    return (
        <ul>
            {
                fruits.forEach(fruit => (
                    <li>{fruit}</li>
                ))
            }
        </ul>
    );
}

// This doesn't work because forEach() returns undefined.


// If you still want to use forEach()

// You would need to build an array manually:

const items = [];

fruits.forEach((fruit, index) => {
    items.push(<li key={index}>{fruit}</li>);
});

return <ul>{items}</ul>;

// This is more verbose than using map().






// Definition  map()   -- map() creates a new array by applying a callback function to every element of the original array.
// Does not modify the original array. Returns a new array of the same length.

// Syntax -- array.map((currentValue, index, array) => { return newValue; }); 
let nums = [1, 2, 3, 4];

let doubled = nums.map(num => num * 2);

console.log(doubled);

 users = ["John", "Alice"];

result = users.map(name => ({
    name: name
}));

console.log(result);


// Definition   --- filter() creates a new array containing only elements that satisfy a condition.
// array.filter((element) => { return condition  });

 nums = [1,2,3,4,5,6];
let even = nums.filter(num => num % 2 === 0);
console.log(even);

 users = [
    {name:"John", age:18},
    {name:"Alice", age:25}
];

let adults = users.filter(user => user.age >= 18);

console.log(adults);

// Definition   --- reduce() reduces an array to a single value by applying a callback function to each element.
// Returns a single value.  Can return object, array, number, string, etc.


// some()  -- Returns true if at least one element satisfies the condition.  Stops immediately after finding the first match.

nums = [1,3,5,8];

ans = nums.some(num => num % 2 === 0);

console.log(ans);


// flatMap()
// flatMap() = map() + flat(1)

// It maps each element and flattens one level.

nums = [1,2,3];
ans = nums.flatMap(num => [num,num*2]);
console.log(ans);


users=[{name:"John",age:18},{name:"Alice",age:25},{name:"Bob",age:30}];

result=users.filter(user=>user.age>=21).map(user=>user.name).sort();

console.log(result);  ["Alice","Bob"]



