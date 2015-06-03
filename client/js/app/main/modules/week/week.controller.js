/**
 * @ngInject
 */
module.exports = function (todayService, $location, $anchorScroll, $filter) {
	var vm = this,
		dateFilter = $filter('date');

	todayService.getWeekTasks().success(function (weekTasks) {
		vm.weekTasks = weekTasks;
	});

	vm.todayDate = new Date;

	vm.goToDate = function (date) {
		console.log('go to date', date);
		var newHash = dateFilter(date, 'dm');
		if ($location.hash() !== newHash) {
			$location.hash(newHash);
		} else {
			$anchorScroll();
		}
	};
};