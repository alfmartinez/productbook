'use strict';

describe('Service: preStepActions', function () {

  // load the service's module
  beforeEach(module('productbookApp'));

  // instantiate service
  var preStepActions;
  beforeEach(inject(function (_preStepActions_) {
    preStepActions = _preStepActions_;
  }));

  it('should do something', function () {
    expect(!!preStepActions).toBe(true);
  });

});
