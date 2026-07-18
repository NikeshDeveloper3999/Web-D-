
// Debouncing and throtlar 
// Debouncing is a technique used to delay the execution of a function until the user stops performing an action for a specified amount of time.

const { lazy } = require("react");

// Debounce function implementation

function debounce(fn, delay) {
    let timer;
    return function (...args) {

        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}


// Using debounce
const input = document.querySelector("#search");

input.addEventListener( "input",debounce(search, 500));

// Debounce -- ek delay hota hai jisme ek function ko delay deta hai jab tak user ko kisi bhi action nahi karta hai



/*
Throttling in JavaScript

Throttling is a technique that limits how often a function can execute.

Throttling ensures that a function is executed at most once during a specified time interval, even if the event occurs many times.
*/

function Throttling(fn, delay) {

let timer =0; 
return function(...args){
let now = Date.now();
if(now - timer >= delay)
{  timer = now;
    fn(...args);
}
}
}

input.addEventListener( "input",Throttling(function(){}, 500)); 




/*
1. Which is used for a search box?
✅ Debouncing, because you want to wait until the user finishes typing.

5. Which is used for scrolling?
✅ Throttling, because you want updates while the user is still scrolling, but not on every single scroll event.
*/



// IntersectionObserver in lazy Loading images 


let imgs = document.querySelectorAll('img')
const Observer = new IntersectionObserver( function(entries , Observer){ 
    entries.forEach(entry => {
        if(entry.isIntersecting){
            let img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded')
            Observer.unobserve(img);
        }
    });
     imgs.forEach(function(img){Observer.observe(img)});
    }, {root: null, threshold: 0.1})


// i create observe html file  check ✅ 

// dataset matlab  koi bhi value jo data- se insilize he exp --  > data-src='img1.jpg' 
{/* <img data-src='img1.jpg' alt='image'/>  */}



// Code Spliting #search
// Code Splitting is a performance optimization technique that divides the application into smaller chunks so that only the required code is downloaded when needed.

/*

With Code Splitting

React provides React.lazy().

import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Dashboard = lazy(() => import("./Dashboard"));

Now each component becomes a separate JavaScript chunk.

Using Suspense

Since components load asynchronously, wrap them in Suspense.

import { Suspense, lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

function App() {
    return (
        <Suspense fallback={<h2>Loading...</h2>}>
            <Dashboard />
        </Suspense>
    );
}

If Dashboard.js is still downloading, React shows:

Loading...

*/



// avoiding unnecessary reflows and repaints  
// Reflow: when the size of an element changes, the browser has to reflow the page to adjust for the changes.
// Repaint: when the color of an element changes, the browser has to repaint the page to reflect the changes.


/*

Reflow is the process where the browser recalculates the layout of the page after changes that affect an element's size or position.

Example
const box = document.getElementById("box");

box.style.width = "300px";

Changing the width changes the layout, so the browser performs a reflow.

What is Repaint?

A repaint happens when an element's appearance changes without affecting its layout.

Interview Definition:

Repaint is the process of redrawing an element after changes that affect only its appearance, such as color or background.

Example
box.style.backgroundColor = "red";

The size and position stay the same, so only a repaint occurs.



box.classList.add("big-box");
.big-box {
    width: 100px;
    height: 200px;
    margin: 20px;
}

*/


const ul = document.querySelector("ul");

const fragment = document.createDocumentFragment();

for (let i = 1; i <= 1000; i++) {

    const li = document.createElement("li");

    li.textContent = `Item ${i}`;

    fragment.appendChild(li);

}

ul.appendChild(fragment);
// document.createDocumentFragment() creates a temporary in-memory container for DOM nodes. We can build multiple elements inside it and append them to the DOM in a single operation, reducing unnecessary reflows and improving performance.



// MEmory leakes : timers ,  event listner 

let count =0 ;
let intrt  = setInterval(()=>{
if(count<10){
    console.log(count);
    count++;
}else{
    clearInterval(intrt);
}
},2000)


 