const http = require("http");

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "application/json");

    if (req.method === "GET" && req.url === "/users") {
        res.end(JSON.stringify({
            message: "GET Request - Fetch all users"
        }));
    }

    else if (req.method === "POST" && req.url === "/users") {
        res.end(JSON.stringify({
            message: "POST Request - User Created"
        }));
    }

    else if (req.method === "PUT" && req.url === "/users") {
        res.end(JSON.stringify({
            message: "PUT Request - User Replaced"
        }));
    }

    else if (req.method === "PATCH" && req.url === "/users") {
        res.end(JSON.stringify({
            message: "PATCH Request - User Updated"
        }));
    }

    else if (req.method === "DELETE" && req.url === "/users") {
        res.end(JSON.stringify({
            message: "DELETE Request - User Deleted"
        }));
    }

    else {
        res.statusCode = 404;
        res.end(JSON.stringify({
            message: "Route Not Found"
        }));
    }

});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});