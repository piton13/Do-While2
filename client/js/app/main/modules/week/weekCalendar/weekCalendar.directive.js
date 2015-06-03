/**
 * @ngInject
 */
module.exports = function () {
	return {
		restrict: 'E',
		replace: true,
		transclude: false,
		scope: {
			onDaySelected: '='
		},
		bindToController: true,
		controller: require('./weekCalendar.directive.ctrl'),
		controllerAs: 'calendar',
		templateUrl: 'weekCalendar.tpl.html'
	};
};