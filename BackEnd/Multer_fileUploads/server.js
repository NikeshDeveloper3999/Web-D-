
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const path = require('path');
const multer = require('multer');
app.set('view engine', 'ejs')
app.set('views', path.resolve('./views'))

// const upload = multer({ dest: 'uploads/' });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname); // .webp
    const uniqueName = `file-${Date.now()}${ext}`;
    cb(null, uniqueName);
  },
});


const upload = multer( { storage: storage });






app.get('/', (req, res) => res.render('index'));

app.post('/upload', upload.single('file') , (req, res) => {
console.log(req.body)
console.log(req.file)
return res.redirect('/') 

});


app.listen(3000, () => console.log('Example app listening on port 3000!'));
