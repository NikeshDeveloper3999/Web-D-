const express = require('express')
const app = express(); 
const cookieParser = require('cookie-parser')


app.use(cookieParser())


app.get('/', (req , res)=>{
    res.cookie('name',"harsh");   // set cookies  means -- server se browser par kuch data store karwa dena  
    return res.send('done' )
}) 


app.get('/read', (req , res)=>{
     console.log(req.cookies);   // get cookies  means -- browser se server par kuch data fetch karna
    return res.send('done' )
}) 


app.listen( 8000 , ()=>{ console.log( "server startes on port 8000 ")})
