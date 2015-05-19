/**
 * @ngInject
 */
module.exports = function (todayService) {
    var vm = this;

    this.todayDate = new Date();
    this.tasks = [];

    todayService.getTodayTasks().success(function (tasks) {
        vm.tasks = tasks;
    });
};
