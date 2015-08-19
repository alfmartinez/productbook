'use strict';

var nodemailer = require("nodemailer");
var transporter = require("./sendGridTransporter");

var mailer = function(to, subject, content) {
  var mailOptions = {
    from: 'ProductBook <no-reply@productbook.com>',
    to: to,
    subject: subject,
    text: content,
    html: '<p>' + content + '</p>'
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: ' + info.message);
  });
}

module.exports = mailer;
