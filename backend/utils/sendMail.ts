import nodemailer from "nodemailer"
const nodemailerConfig = require("../utils/nodeMailerConfig")


interface Mail{
    to:string,
    subject:string,
    html:string
}

 const sendEmail = async (mail:Mail) => {
 
  const transporter = nodemailer.createTransport(nodemailerConfig);

  return transporter.sendMail({
    from: '"StarCLinic" generalproject4@gmail.com', // sender address
    to:mail.to,
    subject:mail.subject,
    html:mail.html
  });
};

export default sendEmail;