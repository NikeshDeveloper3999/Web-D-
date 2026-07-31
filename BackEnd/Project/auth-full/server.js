const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Database
const connectDb = require("./Config/Mongodb");

// Routes
const userRoute = require("./Routes/userRoute");

// Environment variables
const PORT = process.env.PORT || 8000;

// Database Connection
connectDb();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));  // logger middleware tell about the request
 
// app.use(express.static(path.join(__dirname, "public")));

// View Engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./Views"));

// Routes
app.get("/", (req, res) => {
    res.render("index");
});

app.use("/auth", userRoute);

// Server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});