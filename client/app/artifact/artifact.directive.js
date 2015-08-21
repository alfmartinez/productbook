'use strict';

angular.module('productbookApp')
  .directive('artifact', function() {
    return {
      templateUrl: 'app/artifact/artifact.html',
      restrict: 'E',
      scope: {
        display: '=display'
      },
      link: function(scope, element, attrs) {
        if (typeof scope.display === 'string') {
          scope.artifact = '> *' + scope.display + '*';
        } else {
          console.log(scope.display);
        };
      }
    };
  });
