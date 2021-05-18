const express = require('express');
const router = express.Router();
const cors = require('cors');
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

// Authentication to my gmail account
const contactEmail = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// Verifiy gmail connection
contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Form ready to send emails to byteTheBits0101@gmail.com');
  }
})

router.post('/contact', (req, res) => {
  const {name, email, message} = req.body;

  const mail = {
    from: name,
    to: 'byteTheBits0101@gmail.com',
    subject: 'Contact Form Message',
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({status: 'failed'});
    } else {
      res.json({status: 'sent'});
    }
  });
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

// cmwaqdyjfzapelok