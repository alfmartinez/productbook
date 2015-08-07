'use strict';

angular.module('productbookApp')
  .directive('interview', function($http) {
    return {
      templateUrl: 'app/interview/interview.html',
      restrict: 'E',
      scope: {
        subject: '=about'
      },
      link: function(scope, element, attrs) {
        function renderInterview(subject) {
          if (subject) {
            if (typeof subject.currentInterview === "undefined") {
              subject.currentInterview = 0;
            }
            $http.get('/api/interviews/' + subject.currentInterview).success(
              function(step) {
                scope.step = step;
              });
          }
        }
        scope.$watch('subject', renderInterview);
      },
    };
  });
