import nodemailer from "nodemailer"
async function mailSender(recever:string,object:string,text:string) {
  let  transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 465,
        secure: true,      
          auth: {
          user: process.env.DEFAULT_EMAIL,
          pass: process.env.SMTP_PASSWORD
    
        }
      });
     // console.log("email creactor ",transporter)
      var mailOptions = {
        from: process.env.DEFAULT_EMAIL,
        to: recever,
        subject: object,
        html:text
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }) 
    
}
export default mailSender ;


