
const express = require('express')
const app = express()
const port = 8001
const connectDb = require('./Config/mongoDb')
const urlRoute = require('./Routes/URL_ROutes')
const userRoute = require('./Routes/UserRoute')
const path = require('path')
app.use(express.json())

// server side ren
app.set('view engine', 'ejs')
app.set('views', path.resolve('./Views'))


connectDb()

// Static router for ejs file  
userRoute.get('/login', (req, res) => { res.render('login')})


app.use('/url', urlRoute)
app.use('/user', userRoute)

app.listen( port , ()=>{console.log(`Server started on port ${port}`)   })
