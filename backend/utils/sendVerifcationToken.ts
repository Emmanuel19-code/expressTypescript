import sendEmail from "./sendMail"


interface TokenMail{
    name:string,
    email:string,
    verificationToken:string
}

export const sendVerificationEmail = async (token:TokenMail) => {
 // const verifyEmail = `${origin}/user/verify-email?token=${verificationToken}&email=${email}`;
//
  //const message = `<p>Please confirm your email by clicking on the following link : 
  //<a href="${verificationToken}">Verify Email</a> </p>`;
//
  return sendEmail({
    to: token.email,
    subject: 'Email Confirmation',
    html: `<h4> Hello, ${token.name}</h4>
    This is your OTP ${token.verificationToken} 
    `,
  });
};




