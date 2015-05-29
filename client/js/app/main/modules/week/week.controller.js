/**
 * @ngInject
 */
module.exports = function (todayService) {
    var vm = this;
    vm.showedDays = 0;
    vm.todayDate = new Date();
    vm.weekDays = [];

    todayService.getWeekTasks().success(function (tasks) {
        vm.weekDays = tasks;
    });
};
