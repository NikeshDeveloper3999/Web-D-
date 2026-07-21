
const express = require('express')
const mongoose = require('mongoose')

const app = express();

const url =  'mongodb+srv://nikeshparte726_db_user:Password$4@cluster0.wsku31k.mongodb.net/?appName=Cluster0'


app.use(express.json());
mongoose
  .connect(url)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Error:", err));

  app.get('/',(req , res)=>{
    res.send("hello iam nikesh today i learn express - backend  ");
})

app.listen(3000, ()=>{
    console.log('server running in port 3000');
})
