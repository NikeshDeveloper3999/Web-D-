const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const { restrictToLoggedinUserOnly, checkAuth } = require("./Middleware/auth");
const URL = require("./Models/url");
const connectToMongoDB = require("./Config/mongoDb");
const urlRoute = require('./Routes/URL_ROutes')
const staticRoute = require("./Routes/Static.router");
const userRoute = require("./Routes/UserRoute");
connectToMongoDB();

const app = express();
const PORT = 8001;
app.set("view engine", "ejs");
app.set("views", path.resolve("./Views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use("/user", userRoute);
app.use("/", checkAuth, staticRoute);

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {shortId,},
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
