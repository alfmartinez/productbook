'use strict';

describe('Directive: interview', function () {

  // load the directive's module and view
  beforeEach(module('productbookApp'));
  beforeEach(module('app/interview/interview.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<interview></interview>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the interview directive');
  }));
});