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

// Authentication to my gmail account
const contactEmail = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  service: 'gmail',
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