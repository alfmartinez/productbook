'use strict';

describe('Controller: ProductCtrl', function() {

  // load the controller's module
  beforeEach(module('productbookApp'));

  var ProductCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/products')
      .respond([{
        name: 'AvalonBreach'
      }, {
        name: 'MercurialStar'
      }, {
        name: 'LazyRainDeer'
      }]);
    scope = $rootScope.$new();
    ProductCtrl = $controller('ProductCtrl', {
      $scope: scope
    });
  }));

  it('should display list of products', function() {
    $httpBackend.flush();
    expect(scope.products.length).toBe(3);
  });

  it('should post a new product from new product form', function() {
    $httpBackend.flush();
    $httpBackend.expectPOST('/api/products', {
      name: 'TestProduct'
    }).respond({
      name: 'TestProduct',
      id: 456
    });
    scope.createProduct({
      name: 'TestProduct'
    });
    $httpBackend.flush();
    expect(scope.products.length).toBe(4);
  });
});
