'use strict';

angular.module('productbookApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('products', {
        url: '/product',
        templateUrl: 'app/product/product.html',
        controller: 'ProductCtrl'
      })
      .state('singleProduct', {
        url: '/product/:id',
        templateUrl: 'app/product/productSingle.html',
        controller: 'ProductSingleCtrl'
      });
  });
