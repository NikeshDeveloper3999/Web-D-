const { v4: uuidv4 } = require("uuid");
const User = require("../Models/user");
const {isAuthenticated} = require("../Utility/auth");
const bcrypt = require('bcrypt');

async function handleUserSignup(req, res) {
  const { name, email, password } = req.body;

const saltRounds = 10;
const myPlaintextPassword = password;
bcrypt.hash(myPlaintextPassword, saltRounds).then( async function(hash) { 
  await User.create({ name,email,password: hash,});
});

  return res.redirect("/");
}




async function handleUserLogin(req, res) {
  const { email, password } = req.body;

  // Find user by email only
  const user = await User.findOne({ email });

  if (!user) {
    return res.render("login", {
      error: "Invalid credentials",
    });
  }

  // Compare entered password with hashed password
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.render("login", {
      error: "Invalid credentials",
    });
  }

  // Create session
  const sessionId = uuidv4();
  isAuthenticated(sessionId, user);

  res.cookie("uid", sessionId);

  return res.redirect("/");
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
};
