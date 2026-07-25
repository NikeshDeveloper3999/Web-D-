const mongoose = require('mongoose')

const connectDb = async  ()=>{
const db = await mongoose.connect('mongodb://127.0.0.1:27017/urlshortner')

console.log("MongoDB Connected")

}

module.exports = connectDb
