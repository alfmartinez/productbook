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
        name: subject.artifacts.successFactors[1],
        class: "why",
        radius: 6,
        children: [{
          name: "Qui ?",
          class: "who",
          radius: 4
        }]
      };
    }

    // Public API here
    return {
      execute: execute
    };
  });
