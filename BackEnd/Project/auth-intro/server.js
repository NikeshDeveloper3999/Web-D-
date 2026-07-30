const express = require('express')
const app = express(); 
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken') 

app.use(cookieParser())

const secretkey = 'nikeshDev'
app.get('/', (req , res)=>{
    var token = jwt.sign({ name: "harsh" }, secretkey);

    res.cookie('token', token);   // set cookies  means -- server se browser par kuch data store karwa dena  

    return res.send('done' )
}) 


app.get('/read', (req , res)=>{
     console.log(req.cookies);   // get cookies  means -- browser se server par kuch data fetch karna
     
     const data = jwt.verify(req.cookies.token, secretkey);   // decrypt token 
    return res.send('done' )
}) 


app.listen( 8000 , ()=>{ console.log( "server startes on port 8000 ")})
