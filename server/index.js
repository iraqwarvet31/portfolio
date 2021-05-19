const express = require('express');
const router = express.Router();
const cors = require('cors');
const { google } = require('googleapis');
const nodemailer = require('nodemailer');

let app = express();
let port = 3000;
require('dotenv').config();

app.use(express.static(__dirname + '/../public'));
app.use(express.json());
app.use('/', router);

app.use(cors({
  origin: '*',
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With', 'Accept'],
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

router.post('/contact', (req, res) => {
  const {name, email, message} = req.body;

  sendMail(name, email, message, res).then(result => console.log('Email sent...', result))
    .catch(error => console.log(error.message));

  async function sendMail(name, email, message, res) {
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

      res.send('sent')
      return result;


    } catch (error) {
      res.send('failed');
      return error;
    }
  }

})

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
