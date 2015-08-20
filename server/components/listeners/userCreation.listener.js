'use strict';

var mailer = require('../mailer');
var config = require('../../config/environment');

function adminShouldBeNotified(doc) {
  return !doc.creationNotified;
}

function notifyAdmin(doc) {
  mailer(config.admin_email, 'Création utilisateur',
    'Utilisateur ' + doc.name + ' créé!');
  doc.creationNotified = true;
  doc.save();
}

module.exports = function(doc) {
  if (adminShouldBeNotified(doc))
    notifyAdmin(doc);
};
