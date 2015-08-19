'use strict';
var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: 'localhost',
  port: 25
});

module.exports = transporter;
