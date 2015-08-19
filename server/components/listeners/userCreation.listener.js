'use strict';

function adminShouldBeNotified(doc) {
  return !doc.creationNotified;
}

function notifyAdmin(doc) {
  console.log('Utilisateur %s créé!', doc.name);
  doc.creationNotified = true;
}

module.exports = function(doc) {
  if (adminShouldBeNotified(doc))
    notifyAdmin(doc);
};
