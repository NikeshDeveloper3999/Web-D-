const express = require("express");
const app = express();
const usersData = require("./Dummy-data.json");
const fs = require("fs");

app.get("/", (req, res) => {
    try{
        res.send("server is running");
    }
    catch(err){
        res.status(500).send(err.message);
    }
});


app.get("/users", (req, res) => {
    try{ res.send(usersData)  }
    catch(err){res.status(500).send(err.message);}
});


app.get("/user/name", (req, res) => {
    try{
            const html=` 
            <ul>
            ${usersData.map((user) => `<li>${user.name}</li>`).join(' ')}
            <ul>`;
            res.send(html)
    }
    catch(err){res.status(500).send(err.message);}
});

// dynamic path parameter 

app.get('/user/:id' , (req ,res)=>{
    try{
        const id =  Number(req.params.id);
        const user = usersData.find((user) => user.id === id)
        res.send(user)
    }
    catch(err){res.status(500).send(err.message);}
})



app.post('/create-user' , (req, res)=>{
try{
const newUser = req.body;
console.log(newUser);

usersData.push(newUser);  
fs.writeFile("./Dummy-data.json", JSON.stringify(usersData), (err) => {
    if (err) throw err;
    else res.send("User created successfully"  + newUser);
});
}
catch(err){res.status(500).send(err.message);}  
})







app.listen(3000 , ()=>{
console.log('Server is running on port 3000')
})

