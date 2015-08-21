'use strict';

angular.module('productbookApp')
  .factory('preStepActions', function() {
    function execute(action, step, subject) {
      switch (action) {
        case 'initImpactMap':
          initImpactMap(step, subject);
          break;
        default:
          throw 'Pre Action Not Implemented';
      }
    }

    function initImpactMap(step, subject) {
      subject.artifacts.impactMap = {
        type: 'impactMap',
        why: subject.artifacts.successFactors[1]
      };
    }

    // Public API here
    return {
      execute: execute
    };
  });
