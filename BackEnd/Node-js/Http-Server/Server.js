
// creating http server 

const http = require("http");

const { configDotenv } = require("dotenv");
configDotenv();  

const port = process.env.PORT || 8000;

const myserver = http.createServer((req, res) => {
    console.log("new request received...");
    console.log(req.url);

    res.end("hello from server again");
});

myserver.listen(port, () => {
    console.log(`Server started on port ${port}`);
});



// perform routing project 
/*
const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end("Home Page");
    }

    else if (req.url === "/about") {
        res.end("About Page");
    }

    else if (req.url === "/contact") {
        res.end("Contact Page");
    }

    else {
        res.statusCode = 404;
        res.end("Page Not Found");
    }

});

server.listen(3000);
*/

