var angular = require('angular');

var uiModule = angular.module('uiModule', [])
    .directive('dwColor', require('./color.directive'));

module.exports = uiModule.name;