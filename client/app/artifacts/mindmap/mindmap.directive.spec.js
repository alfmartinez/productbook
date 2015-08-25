'use strict';

describe('Directive: mindmap', function () {

  // load the directive's module and view
  beforeEach(module('productbookApp'));
  beforeEach(module('app/artifacts/mindmap/mindmap.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mindmap></mindmap>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the mindmap directive');
  }));
});