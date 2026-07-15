
// Fetch API in JavaScript
/*
The Fetch API is used to make HTTP requests (GET, POST, PUT, DELETE, etc.) to a server or API.

Definition (Interview):

The Fetch API is a modern JavaScript API used to send HTTP requests and receive responses asynchronously. It returns a Promise.
*/

// json  - java script object notation 

/* fetch -- allways return a promise 
 all APi data is form of json data but we need object data  thats why we use res.json() method 
 thats converts json data to object data but fetch return promise then we use .then method  */

let x  = fetch("https://jsonplaceholder.typicode.com/todos")
.then((res)=>res.json())
.then((data)=>console.log(data))
.catch((err)=>console.log("Error"))



// fetch & async await


async function fetchdata (params) {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos"); // return json data  fetch return promise so use await 
    console.log(res)

    let data = await res.json(); // convert json to object  but json data also return promise so use await 
}

fetchdata(); 



// Post BAsics  
// Headers 
// json parsing
// From Submission via fetch  
// basic rest principles 
// error handling with response.ok and try catch


 