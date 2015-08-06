'use strict';

describe('Product View', function() {
  var page;

  beforeEach(function() {
    browser.get('/product');
    page = require('./product.po');
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
