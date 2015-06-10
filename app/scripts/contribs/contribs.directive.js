(function() {
  'use strict';

  function btbContribs() {
    return {
      restrict: 'E',
      templateUrl: 'scripts/contribs/contribs.directive.html',
      controller: 'ContribsController',
      controllerAs: 'cc'
    };
  }

  angular.module('btbVisApp.contribs')
    .directive('btbContribs', btbContribs);
})();
