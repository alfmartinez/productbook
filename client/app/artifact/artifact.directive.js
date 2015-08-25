'use strict';

angular.module('productbookApp')
  .directive('artifact', function($compile) {
    return {
      templateUrl: 'app/artifact/artifact.html',
      restrict: 'E',
      scope: {
        display: '=display'
      },
      link: function(scope, element, attrs) {
        var directive;
        if (typeof scope.display === 'string') {
          scope.artifact = '> *' + scope.display + '*';
          directive = '<div btf-markdown="artifact"></div>';
        } else {
          scope.artifact = scope.display;
          directive =
            '<mindmap model="artifact" width="800" height="200"></div>';
        };
        var newDirective = angular.element(directive);
        element.append(newDirective);
        $compile(newDirective)(scope);
      }
    };
  });
