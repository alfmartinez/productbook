'use strict';

angular.module('productbookApp')
  .controller('ProductSingleCtrl', function($stateParams, $scope, $http,
    $location) {

    $http.get('/api/products/' + $stateParams.id).success(function(product) {
      $scope.product = product;
    }).error(function() {
      $location.path('/product');
    });

    $scope.save = function(product) {
      $http.put('/api/products/' + product._id, product).success(function(
        result) {
        // Visual feedback
      }).error(function(error) {
        // Visual feedback
      });
    };

  });
