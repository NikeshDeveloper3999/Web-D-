

/*closures hota hai function jo ki kisi parent function ke andar ho aur andar wala function return ho raha ho and retyuring function 
use kare parent function ka koi variable 
*/

// A closure is a function bundled together with its lexical environment, allowing it to access variables from its outer scope even after the outer function has returned.
function parentFunction() {
  let parentVariable = "I am from parent function";

  return function () {
    console.log(parentVariable);
  };
}

let child1 = parentFunction();

child1();


 function parentFunction1() {
  let parentVariable = "I am from parent function";

  function childFunction1() {
    console.log(parentVariable);
  }

  return childFunction1;
}

let child = parentFunction1();

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

// 4. event handler
/*
let myButton = document.getElementById("myButton");
myButton.addEventListener("click", function() {
  console.log(this);  // in event handler this refers to the element that triggered the event exp button
});

*/
// 5. class
class MyClass {
  myMethod() {
    console.log(this);  // in class this refers to the blank object itself exp myClass
  }
}
let myClass = new MyClass();
myClass.myMethod();


// 6. arrow function  // arrow function always takes the value OF PARENT 
let myArrowFunction = () => {
  console.log(this);  // in arrow function this refers to the global object which is window in browser
}
 


// this VALUE 
/**
GLOBAL  - window
FUNCTION - WINDOW
METHOD with es5 function - OBJECT
METHOD with es6 arrow function - WINDOW
EVENT HANDLER - ELEMENT THAT TRIGGERED THE EVENT
CLASS - BLANK OBJECT ITSELF
ARROW FUNCTION inside es5 method  - GLOBAL OBJECT
 
*/




// MANUAL  BINDING
// Call apply bind   -- function ko call kartewaqt  hum set kar sakte he ki uske this ki value kya hoga
  

// call method   -- function ko call kartewaqt  hum set kar sakte he ki uske this ki value kya hoga
let myObject1 = {
  name: "John"
}

function myFunction() {
  console.log(this);  // this ki value window thi humko uski value myObject1 set karne hain tu hum function ko call karte hain  aur jisko bhi add karna he use pass kar dete he myFunction.call(myObject1);  
}
myFunction.call(myObject1); 

// call() method always function par he lagega


// apply method 
let myObject2 = {
  name: "John"
}
function myFunction1(a, b) {
  console.log(this); 
  console.log(a, b);
}

/*
myFunction1.apply(myObject2, [1, 2]);  // apply me  first  argument object hoga jo this ki value hoga aur second argument hoga array jo function ke sath pass hoga and as in parameter use hoga   exp myFunction1.apply(myObject2, [1, 2]);
 exp - this ki value myObject2 hogi
 a - 1
 b - 2
*/

//  bind method  -- bind function ko call nahi karti  lekin humko function ko call karne ke liye ek new function banati hui jisme this ki value set hoti hui
/*
bind() does not call the function immediately.
Instead, it returns a new function with:
this permanently set to the provided object.
Optional arguments pre-filled (partial application).
*/

let myObject3 = 
{
  name: "John"
}

function myFunction2(a, b) {
  console.log(this); 
  console.log(a, b);
}

let boundFunction = myFunction2.bind(myObject3, 1, 2);
boundFunction();




