'use strict';

angular.module('productbookApp')
  .directive('interview', function($http) {
    return {
      templateUrl: 'app/interview/interview.html',
      restrict: 'E',
      transclude: true,
      scope: {
        subject: '=about',
        save: '&save'
      },
      //link: function(scope, element, attrs) {

      //},
      controller: function($scope, Questions) {

        $scope.answer = function() {
          var stepResume,
            resumeExists,
            nextStep = Questions.processAnswer($scope.step,
              $scope.subject);
          $scope.subject.currentInterview = nextStep;
          stepResume = {
            number: $scope.step.number,
            title: $scope.step.title,
            section: $scope.step.section,
            sectionOrder: $scope.step.sectionOrder
          };
          resumeExists = $scope.subject.passedInterviews.find(function(
            item) {
            return item.number === stepResume.number;
          });
          if (resumeExists === undefined) {
            $scope.subject.passedInterviews.push(stepResume);
          }
          renderInterview($scope.subject);
        };

        $scope.gotoStep = function(step) {
          $scope.subject.currentInterview = step.number;
          renderInterview($scope.subject);
        };

        $scope.getArtifacts = function(step) {
          var result = [];
          if (step) {
            step.displayArtifacts.forEach(function(item) {
              result.push('> *' + $scope.subject.artifacts[item] +
                '*');
            });
          }
          return result;
        }

        function renderInterview(subject) {
          if (subject) {
            if (typeof subject.currentInterview === 'undefined') {
              subject.currentInterview = 0;
            }
            $http.get('/api/interviews/' + subject.currentInterview).success(
              function(step) {
                $scope.step = step;
              });
          }
        }
        $scope.$watch('subject', renderInterview);
      }
    };
  });
