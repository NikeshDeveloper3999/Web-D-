
const express = require('express')

const app = express();


app.get('/',(req , res)=>{
    res.send("hello iam nikesh today i learn express - backend  ");
})

app.listen(3000, ()=>{
    console.log('server running in port 3000');
})
