
const express = require('express')
const app = express()
const port = 8001
const connectDb = require('./Config/mongoDb')
const urlRoute = require('./Routes/URL_ROutes')
app.use(express.json())

connectDb()


app.use('/url', urlRoute)

app.listen( port , ()=>{console.log(`Server started on port ${port}`)   })
