// Synchrounous  vs Asynrounous js 

// Synchronous JavaScript
// Synchronous code executes one line at a time, and each task must finish before the next one starts.

//  asyncrounous  js 
// Asynchronous code lets long-running operations start without blocking the rest of the program. The program continues executing other code while waiting.



/*
1. Is JavaScript synchronous or asynchronous?
JavaScript's execution is synchronous and single-threaded, but it can perform asynchronous operations using browser APIs (or Node.js APIs), the event loop, callbacks, promises, and async/await.

2. Why does setTimeout() not block the code?
Because the timer is handled by the browser (Web APIs). JavaScript continues executing other code, and the callback runs later when the timer finishes and the call stack is empty.
*/



//  Callback pattern and callback Hell $
// callback function --  function which passes in another function as an argument is called callback function
// callback ka use async programming ko handle karne ke liye kiya jata ha

// example foodapp -- zomato

// step1 select food

function selectFood(cbfun) {
  console.log("user is selecting food ");

  setTimeout(() => {
    console.log("food selected");
    cbfun(); // callback function
  }, 2500);
}

// step 2 place order

function placeorder(cbfun) {
  console.log("order placed ...");
  setTimeout(() => {
    console.log("order sent to the restaurant ");
    cbfun(); // callback function
  }, 2000);
}

// step3 prepare food

function prepareFood(cbfun) {
  console.log("food is preparing  ");

  setTimeout(() => {
    console.log("food prepared");
    cbfun(); // callback function
  }, 4000);
}

// step 4 pickup order

function pickuporder(cbfun) {
  console.log("your order is picked...");

  setTimeout(() => {
    console.log(" order picked up ");
    cbfun(); // callback function
  }, 3000);
}

// step 6 deliver order

function deliverFood(cbfun) {
  console.log("order is on the way ");

  setTimeout(() => {
    console.log("food delivered ");
    cbfun(); // callback function
  }, 2500);
}

// last step complete order
function completeOrder() {
  console.log("order is complete enjoy food!!! ");
}



//📍 What is Callback Hell?
// Callback hell (also called the pyramid of doom) happens when you have many nested callback functions, especially in asynchronous code. 
// it hapens when multiple callbacks are nested inside one another creating deeply indented code that is difficult to read and maintain
// it ususally happens in async programming


selectFood(() => {
  placeorder(() => {
    prepareFood(() => {
      pickuporder(() => {
        deliverFood(() => {
          completeOrder();
        });
      });
    });
  });
});



// Step 1:
// Call selectFood() and pass an arrow function as a callback.
// When selectFood() completes its task, it executes the callback by calling cbfun().
// Inside the callback, call placeorder() and pass another arrow function as its callback.

// Step 2:
// When placeorder() completes its task, it executes its callback.
// Inside that callback, call prepareFood() and pass another arrow function as its callback.

// Step 3:
// When prepareFood() completes its task, it executes its callback.
// Inside that callback, call pickuporder() and pass another arrow function as its callback.

// Step 4:
// When pickuporder() completes its task, it executes its callback.
// Inside that callback, call deliverFood() and pass another arrow function as its callback.

// Step 5:
// When deliverFood() completes its task, it executes its callback.
// Inside that callback, call completeOrder() to complete the food delivery process.