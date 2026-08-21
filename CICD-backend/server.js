const express = require('express');
const app = express();

const port = process.env.PORT ?? 8080

app.get('/' , (req , res )=>{
return res.json({msg: "hello from the server "})
})

app.listen( port , ()=>{
    console.log('server running on port '+ port)
})
