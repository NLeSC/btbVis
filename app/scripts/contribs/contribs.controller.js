(function() {
  'use strict';

  function ContribsController($scope, $element, DataService) {
    $scope.specfile = ''; // default value

    $scope.loadJson = function(jsonURL) {
      DataService.getJson(jsonURL)
        .then(function(response) {
          $scope.setSpec(response.data);
        });
    };

    $scope.setSpec = function(spec) {
      $element.find('#polyelement')[0].spec = spec;
    };

    $scope.getData = function(url) {
      DataService.getJson(url)
        .then(function(response) {
          // TODO: I know data in specfiles is in 'table', but could this be
          // more flexible ?
          var newdata = [
            {
              name: 'table',
              values: response.data
            }
          ];

          var polyElems = $element.find('.polyelement');
          for (var i = 0; i < polyElems.length; i++) {
            polyElems[i].loadData(newdata);
          }
          $scope.loadedData = url;
        });
    };

    $scope.doQuery = function() {
      var url = 'http://localhost:5000/wikicontrib/' + $scope.query;
      $scope.getData(url);
    };
  }

  function DataService($http) {
    function getJson(jsonURL) {
      return $http({
        method: 'get',
        url: jsonURL
      });
    }

    return ({ getJson: getJson });
  }

  angular.module('btbVisApp.contribs')
    .controller('ContribsController', ContribsController)
    .service('DataService', DataService);
})();
