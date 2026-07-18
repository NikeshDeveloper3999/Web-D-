// Advanced topics & architecture Thinking 

//1.   Separation of concerns
// Dom ka code and logic ka code alag hona chaiye 

// matlab js file me dom manipulation code alag hona chaiye  aur logic ka code alag hona chaiye



function add(n , n2){
    return n + n2 ;
}

let handleClick = function() {

let num = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);

let finaladdition =  add(num , num2)  // logic

let li = document.createElement("li");
li.textContent =  finaladdition;
document.querySelector("ul").appendChild(li);
document.querySelector('body').appendChild(ul);

};


// custom utilities  (exp  - own implement of map   , deep clone )

// implement MAP 
const arr= [ 1, 3, 5, 7, 9]

function mymap (arr , callbackFUn){
    let newArr = [];
    for(let i = 0 ; i < arr.length ; i++){
        newArr.push(callbackFUn(arr[i]));
    }
    return newArr;
}

let newArr = mymap(arr , function(n){return n * 2;});


// Deep Clone 



// How js works in Browser ( event Loop web api call stack microtask queue )

// call Stack (execution stack )

// web api 
// console setTimeout setInterval alert prompt are web api part 
// event loop
// Debuger  (chrome dev tools)




