const nodemailer = require('nodemailer');

const dotenv = require('dotenv')    
dotenv.config()

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.email_Nodemailer,
        pass: process.env.node_password
    }
});



transporter.verify().then(() => {
    console.log('Transporter is ready to send emails.');
}).catch((error) => {
    console.error('Error verifying transporter:', error);
});

// Email sending function


const sendEmail = async (options) => {
    try{
        const mailOptions = {
            from: process.env.email_Nodemailer,  
            to: options.to,
            subject: options.subject,
            text: options.text,
            html: options.html
        };
        await transporter.sendMail(mailOptions);
        console.log('Message sent:', mailOptions.subject);
}
     catch (error) {
        console.error('Error sending email:', error);
    }
};




module.exports = { sendEmail };


