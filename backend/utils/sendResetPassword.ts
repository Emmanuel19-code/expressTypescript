import sendEmail from "./sendMail";


interface resetDetails{
     name:string,
     email:string,
     token:string,
     origin:string
}

export const sendResetPassswordEmail = async (reset:resetDetails) => {
  const resetURL = `${origin}?token=${reset.token}&email=${reset.email}`;
  const message = `<p>Please reset password by clicking on the following link : 
  <a href="${resetURL}">Reset Password</a></p>`;

  return sendEmail({
    to: reset.email,
    subject: 'Reset Password',
    html: `<h4>Hello, ${reset.name}</h4>
   ${message}
   `,
  });
};