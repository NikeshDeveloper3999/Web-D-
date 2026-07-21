
const nodemailer = require("nodemailer");
require("dotenv").config();

const EmailSending = async (email, res) => {
  try {

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {   
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

    await transporter.sendMail({
    from:`"My App" ${process.env.EMAIL_USER}`,
      to: email,
      subject: "Whatever you want",
      html: "<h3>Testing mail</h3>",
      // attachments: attachmentUrl
      //   ? [{
      //       filename: "Receipt.pdf",
      //       path: attachmentUrl,
      //       contentType: "application/pdf",
      //     }]
      //   : [],
    });

    console.log(`✅ Email sent to ${email}`);
    return true;

  } catch (err) {

    console.error("❌ Email failed:", err);
    throw err;

  }
};

module.exports = { EmailSending };
