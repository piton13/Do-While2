var angular = require('angular');

var weekNavModule = angular.module('weekNavModule', [])
    .directive('dwWeekNav', require('./weekNav.directive'))
    .directive('dwWeekDay', require('./weekDay.directive'))
    .filter('todayDateWord', require('./filterOfTodayDate'));

module.exports = weekNavModule.name;
