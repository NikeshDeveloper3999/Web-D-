
const express = require('express')
const {configDotenv} = require('dotenv');
const ConnectedDb = require('./Middleware/Db');


configDotenv();

const app = express();
let port = 3000;

app.use(express.json());
ConnectedDb();

const userRouter = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes')
const sellerRoutes = require('./routes/sellerRoutes')

app.get('/',(req , res)=>{
    res.send("hello iam nikesh today i learn express - backend  ");
})



app.use('/user' ,userRouter);
app.use('/product' ,productRoutes);

app.use('/seller' ,sellerRoutes);

app.listen(port, ()=>{
    console.log('server running in port 3000');
})


