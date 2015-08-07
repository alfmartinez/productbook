'use strict';

var doLogin = function(account) {
  browser.get('/login');
  element(by.model('user.email')).sendKeys(account.email);
  element(by.model('user.password')).sendKeys(account.password);
  element(by.css('.btn-login')).click();
  browser.wait(element(by.css('.btn-logout')).isPresent);
};

var doLogout = function() {
  element(by.css('.btn-logout')).click();
  browser.wait(element(by.css('.btn-login')).isPresent);
};

module.exports = {
  doLogin: doLogin,
  doLogout: doLogout
};
