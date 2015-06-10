(function() {
'use strict';

/**
 * @ngdoc overview
 * @name btbVisApp
 * @description
 * # btbVisApp
 *
 * Main module of the application.
 */
angular
  .module('btbVisApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'btbVisApp.contribs'
  ]);
angular.module('btbVisApp.contribs', []);
})();
