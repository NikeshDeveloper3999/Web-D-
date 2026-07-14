

/*closures hota hai function jo ki kisi parent function ke andar ho aur andar wala function return ho raha ho and retyuring function 
use kare parent function ka koi variable 
*/

// A closure is a function bundled together with its lexical environment, allowing it to access variables from its outer scope even after the outer function has returned.


function parentFunction() {
  let parentVariable = "I am from parent function";
  return function() {
    console.log(parentVariable);
  }
   
}
let child1 = parentFunction();

child1();



function parentFunction() {
  let parentVariable = "I am from parent function";
  function childFunction() {
    console.log(parentVariable);
  }
  return childFunction();
}
let child = parentFunction();

child();


/* benefit of closures 

1. Data Privacy and Encapsulation
2. private variable  
*/




// This keyword
// This is a special keyword that refers to an object. The value of this depends on how the function is invoked.
 
/* this is a special keyword that refers to an object.  kyuki jaise ki baki saare kryword ki value ya unka nature same   rehta hai this ki 
value ya nature badal jaata hai is baat se ki aap usey kaha use kar rahe ho */

// this global scope, function , method  , event handler , class

// 1. global scope 
console.log(this); // in global scope this refers to the window object 


// 2. function scope
function myFunction() {
  console.log(this);  // in function scope this refers to the global object which is window in browser
}
myFunction();


// 3. method scope    method are functions inside objects

let myObject = {
  myMethod: function() {
    console.log(this);  // in method scope this refers to the object itself
  }
}
myObject.myMethod();



// this arrow function  and lexical this

