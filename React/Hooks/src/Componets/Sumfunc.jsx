import React  from "react";

const  Sumfunc = React.memo(()=> {
 
function calculatesum({number}){
    let sum =0 ; 
    for(let i=1 ; i<=number ; i++){
        sum+=i; 
    }
    return sum ;
}
const  total = calculatesum();

console.log( " sum func ")
return (
<div>
<h1 > THis is our Math Libraray </h1>
<h2>  Sum : {total}</h2>
</div>
)


}
)
export default Sumfunc ; 