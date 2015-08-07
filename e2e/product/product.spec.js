'use strict';

var login = require('../helpers/login');

describe('Product View', function() {
  var page;

  beforeEach(function() {
    login.doLogin({
      email: 'test@test.com',
      password: 'test'
    });
    browser.get('/product');
    browser.wait(element(by.css('.products')).isPresent);
    page = require('./product.po');
  });

  afterEach(function() {
    login.doLogout();
  });

  it('should display products list', function() {
    expect(page.products.count()).toBe(6);
  });

  it('should allow creation of a new product', function() {
    page.createProduct('MyNewProduct', function() {
      expect(page.products.count()).toBe(7);
    });
  });
});
