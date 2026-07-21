const http = require("http");
const fs = require("fs");
const url = require("url");

const port = 8000;

const myserver = http.createServer((req, res) => {

    const myurl = url.parse(req.url, true);

    console.log(myurl);

    const log = `${new Date().toISOString()} ${req.method} ${req.url}\n`;

    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.log(err);
            res.statusCode = 500;
            return res.end("Internal Server Error");
        }

        switch (myurl.pathname) {

            case "/":
                res.end("Homepage");
                break;

            case "/about":
                res.end("About Page");
                break;

            default:
                res.statusCode = 404;
                res.end("404 Not Found");
        }
    });

});

myserver.listen(port, () => {
    console.log(`Server started on port ${port}`);
});


// modern js use WHATWG URL is fast and secure compare to url  
// exp
/*
const myUrl = new URL(
  "http://localhost:8000/about?id=10"
);

console.log(myUrl.pathname);
console.log(myUrl.searchParams.get("id"));
*/