/**
 * @ngInject
 */
module.exports = function (todayService) {
    var vm = this;
    this.todayDate = new Date();
    this.weekDays = [];

    todayService.getWeekTasks().success(function (tasks) {
        vm.weekDays = tasks;
    });
};
