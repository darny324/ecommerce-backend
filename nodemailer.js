const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport(
  {
    service: 'gmail', 
    auth: {
      user: process.env.USER_EMAIL, 
      pass: process.env.USER_PASSWORD, 
    }
  }
);

transport.verify((error, success) => {
  if (error) {
    console.log('Transporter error:', error);
  } else {
    console.log('Server is ready to take messages');
  }
}); 

module.exports = transport; 