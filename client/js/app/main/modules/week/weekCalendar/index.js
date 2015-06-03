module.exports = require('angular')
	.module('weekCalendarModule', [])
    .factory('calendarService', require('./calendar.service'))
    .filter('weekDayFilter', require('./weekDay/weekDay.filter'))
    .directive('dwWeekCalendar', require('./weekCalendar.directive'))
    .directive('dwWeekDay', require('./weekDay/weekDay.directive'))
    .name;