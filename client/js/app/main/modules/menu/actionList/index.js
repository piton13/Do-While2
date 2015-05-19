var angular = require('angular');

var actionListModule = angular.module('actionListModule', [])
    .directive('dwTodayProjectBadges', require('./todayProjectBadges.directive.js'))
    .directive('dwActionList', require('./actionList.directive'));

module.exports = actionListModule.name;