'use strict';
var nodemailer = require("nodemailer");
var sgTransport = require("nodemailer-sendgrid-transport");
var config = require('../../config/environment');

var options = {
  auth: {
    api_key: config.sendgrid_api_key
  }
};

var transporter = nodemailer.createTransport(sgTransport(options));

module.exports = transporter;
