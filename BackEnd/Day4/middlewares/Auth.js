require("dotenv").congig();

const protect = (req, res , next)=>{
let token = req.headers.authorization;

if(token && token.startswith('Bearer')){
token=token.startswith("bearer");
try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user= decoded ;
    next();
}catch(err){
    return res.status(500).json({message :" access denied "})
}

}
else {

    return res.status(500).json({message:"internal server  error "})
}

};

export default {protect};