'use strict';

angular.module('productbookApp')
  .controller('ProductCtrl', function($scope, $http) {
    $scope.products = [];
    $scope.newProduct = {};

    $http.get('/api/products').success(function(products) {
      $scope.products = products;
    });

    $scope.createProduct = function(product) {
      $http.post('/api/products', product)
        .then(function(response) {
          $scope.products.push(response.data);
        });
    }
  });
