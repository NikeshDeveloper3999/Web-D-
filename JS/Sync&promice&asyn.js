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



// What is a Promise ✅
// A Promise is a better way to handle asynchronous operations than callbacks. It helps avoid callback hell.

// A Promise is an object that represents the  (success) or failure of an asynchronous operation.
/*
new Promise() takes a callback function with two parameters:
resolve → Success
reject → Failure

*/
console.log( 'promise section ')



 let response = new Promise ((resolve  , reject  )=>{

    let response = true;
 if(response){
  resolve("success")
 }else{
  reject("failure")
 }
 })


response.then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
})


let pr = new Promise((resolve, reject) => {

setTimeout(()=>{ 

let random_num = Math.floor(Math.random()*10)
if(random_num > 5){resolve(  'resolve ' +  random_num);}
else{   reject( ' reject '+random_num)}

}, 1000)
});

pr.then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
})


/* Each .then() waits for the previous promise to resolve.

3. What is resolve()?

Marks the promise as successful and passes the result to .then().

4. What is reject()?

Marks the promise as failed and passes the error to .catch().

5. What is Promise Chaining?

Using multiple .then() calls where each one waits for the previous promise to resolve.

login()
    .then(getProfile)
    .then(getOrders)
    .then(logout)
    .catch(console.error);

*/

 


// aasync & await is used to handle asynchrouns operation 


/* 1. async keyword 
 a function  declared with async keyword always return a promise -- 
  whatever we return inside it automatically becomes a resolved promise 
 */

async function  greet() {

    return hello ;

}

// async function return always promise 📍
// console.log( greet() ); -- return promise ;

 greet().then((data)=>{ console.log(data)});  // handle promise 



//  📍📍📍📍📍

 const f1 = () =>{
return new Promise((resolve , reject )=>{

setTimeout(()=>{
    resolve('promise resolved ');
},2000)
});
 }

console.log(f1());
f1().then((dtaa)=>{console.log(data)});


/* await keyword 
can only be used inside async function 
it pause the execution of the function until the promise resolved 
it makes asynchronous code look synchronous 
*/



async function resolvepromise(params) {
console.log('resolve promise ');


    let data = await  f1();  // f1 ek async function ha jo promise return kar raha ha aur await keyword usse promise ko handle kar raha ha 
   console.log(data);
}


