const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path  = require('path');

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs")
app.set("views" , path.resolve('./Views'))

app.get('/', (req, res) => {
  res.render('Home')
})


app.listen(3000, () => {
  console.log('Server is listening on port 3000')
})
