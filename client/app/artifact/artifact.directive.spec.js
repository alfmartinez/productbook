'use strict';

describe('Directive: artifact', function () {

  // load the directive's module and view
  beforeEach(module('productbookApp'));
  beforeEach(module('app/artifact/artifact.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<artifact></artifact>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the artifact directive');
  }));
});