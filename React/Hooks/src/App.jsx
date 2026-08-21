import './App.css'
import { useState } from 'react'
import Sumfunc from "./Componets/Sumfunc"

function App() {
  const [count, setCount] = useState(0)
  const [number , setnumber] = useState(1000)

  console.log(" app render "); 

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

function calculatePrime(){
  const prime=[]; 

for(let i=1 ; i<=number ; i++){
if(isPrime(i)){prime.push(i)}

}

return prime ;
}



return (
<div>
<div  className='mt-10 flex justify-evenly *: ml-30  '>
<h1>Counter : {count}  </h1>
<button onClick={()=>setCount(count+1)}  className='bg-white  text-2xl  rounded-2xl  p-3 h-fit m-2   '>update </button>
</div>

<Sumfunc number={1000}/> 

    </div>

   )
}

export default App
