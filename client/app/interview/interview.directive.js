'use strict';

angular.module('productbookApp')
  .directive('interview', function() {
    return {
      templateUrl: 'app/interview/interview.html',
      restrict: 'E',
      scope: {
        subject: '=about'
      },
      link: function(scope, element, attrs) {
        scope.step = {
          number: 1,
          explanation: 'Blah First Explanation',
          question: 'My First question ?'
        };
      }
    };
  });
