
const loginUserModel = require('../Models/loginUserModel');

async  function handleuserSIgnup  (req,res ){

const { firstName, lastName, email, password } = req.body;
await loginUserModel.create({ firstName, lastName, email, password });
return res.status(201).json({ message: 'User created successfully' }).redirect('/');
}
async function handleuserLogin(req, res) {
const { email, password } = req.body;
const user = await loginUserModel.findOne({ email, password });
if (user) {
    return res.status(200).json({ message: 'Login successful' }).redirect('/');
} else {
    return res.status(401).json({ message: 'Invalid credentials' });
}

}



module.exports = { handleuserSIgnup };
