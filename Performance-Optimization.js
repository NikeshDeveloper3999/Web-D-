
// Debouncing and throtlar 
// Debouncing is a technique used to delay the execution of a function until the user stops performing an action for a specified amount of time.

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













/*
1. Which is used for a search box?
✅ Debouncing, because you want to wait until the user finishes typing.

5. Which is used for scrolling?
✅ Throttling, because you want updates while the user is still scrolling, but not on every single scroll event.
*/