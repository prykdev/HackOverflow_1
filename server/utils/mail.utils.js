const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: "2a2f1f8674da96",
    pass: "29594d82bb7518"
  }
})
message = {
  from: "tgoyal63@duck.com",
  to: "developer@priyankaprasad.co",
  subject: "Subject",
  text: "Hello SMTP Email"
}
transporter.sendMail(message, (err, info) => {
  if (err) {
    console.log(err)
  } else {
    console.log(info);
  }
})