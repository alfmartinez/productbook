'use strict';

var mailer = function(to,subject,content) {
  console.log('Sending "%s" to "%s" with content "%s"',subject,to,content);
}

module.exports = mailer;
