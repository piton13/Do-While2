/*@ngInject*/
module.exports = function (calendarService) {
	var vm = this;
	vm.days = calendarService.getNextDaysForWeek();
};