const jwt = require("jsonwebtoken");
require("dotenv").config();

const protect = (req, res, next) => {
  let token = req.headers.authorization;

  if (token && token.startsWith("Bearer ")) {
    try {
      // "Bearer tokenvalue" me se sirf token nikalna
      token = token.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

      req.user = decoded;
      next();
    } catch (err) {
      return res.status(401).json({ message: "Access Denied. Invalid Token" });
    }
  } else {
    return res.status(401).json({ message: "No Token Provided" });
  }
};

module.exports = protect;