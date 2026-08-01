const config = require('config');
config.dotenv();

if(!process.env.port){
    throw new Error("PORT environment variable is not set");
} else if(!process.env.MONGO_URI){
    throw new Error("MONGO_URI environment variable is not set");
} else if(!process.env.secret_key){
    throw new Error("secret_key environment variable is not set");
}

if(!process.env.email_Nodemailer){ throw new Error("email_Nodemailer environment variable is not set");} 
if(!process.env.node_password){ throw new Error("node_password environment variable is not set"); }


