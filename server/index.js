const express = require('express');
const router = express.Router();
const cors = require('cors');
const { google } = require('googleapis');
const nodemailer = require('nodemailer');

// let app = express();
// let port = 3000;
// require('dotenv').config();

// app.use(express.static(__dirname + '/../public'));
// app.use(express.json());
// app.use('/', router);

// // Authentication to my gmail account
// const contactEmail = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//     user: process.env.GMAIL_USER,
//     pass: process.env.GMAIL_PASS,
//   },
// });

// // Verifiy gmail connection
// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Form ready to send emails to byteTheBits0101@gmail.com');
//   }
// })

// router.post('/contact', (req, res) => {
//   const {name, email, message} = req.body;

//   const mail = {
//     from: name,
//     to: 'byteTheBits0101@gmail.com',
//     subject: 'Contact Form Message',
//     html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
//   };

//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json({status: 'failed'});
//     } else {
//       res.json({status: 'sent'});
//     }
//   });
// });


let app = express();
let port = 3000;
require('dotenv').config();

app.use(express.static(__dirname + '/../public'));
app.use(express.json());
app.use('/', router);

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

router.post('/contact', (req, res) => {
  const {name, email, message} = req.body;

  sendMail(name, email, message).then(result => console.log('Email sent...', result))
    .catch(error => console.log(error.message));

  async function sendMail(name, email, message) {
    try {
      const accessToken = await oAuth2Client.getAccessToken();
      const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: 'byteTheBits0101@gmail.com',
          clientId: CLIENT_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
        }
      })
      const mailOptions = {
        from: name,
        to: 'byteTheBits0101@gmail.com',
        subject: 'Contact Form Message',
        html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
      }

      const result = await transport.sendMail(mailOptions);
      return result;


    } catch (error) {
      return error;
    }
  }

})



app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
