(function() {
  'use strict';

  function btbContribs() {
    return {
      restrict: 'E',
      scope: {},  // Add this line to create an isolated scope
      templateUrl: 'scripts/contribs/contribs.directive.html',
      controller: 'ContribsController',
      controllerAs: 'cc',
      link: function($scope, $element, $attributes) {
        $scope.specfile = $attributes.specfile;
      }
    };
  }

  angular.module('btbVisApp.contribs')
    .directive('btbContribs', btbContribs);
})();
