
// filehandling module in Node.js

const fs = require('fs')

// syn 
// fs.writeFileSync('./text.txt' , 'nikesh parte software engineer ');


// async  async ek callback accept karta he aur return kuch bhi nahi karta 
// fs.writeFile('./text.txt' , 'hello nikesh asynch and we have node.js ' , (err)=>{  if(err){  console.log(err)  ;      return ;}})

// sync 
// const result = fs.readFileSync('./text.txt' , 'utf-8')
// console.log( result)

// async 
fs.readFile('./text.txt' , 'utf-8',  (err , result2)=>{  
    if(err){  console.log(err)  ;      return ;} 
    else console.log(result2)
} )


// append data in current file 
fs.appendFileSync('./text.txt'  , 'append data\n')

// copy file 
fs.copyFileSync('./text.txt',"./copy.txt")


// delete file 
fs.unlinkSync('./copy.txt')



