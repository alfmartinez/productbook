'use strict';

var ProductPage = function() {
  this.productsList = element(by.css('.products'));
  this.products = this.productsList.all(by.css('.product'));
  this.newProduct = element(by.css('.newproduct'));

  this.createProduct = function(name, callback) {
    this.newProduct.element(by.model('newProduct.name')).sendKeys(name);
    this.newProduct.element(by.id('submit')).click().then(callback);
  };
};

module.exports = new ProductPage();
