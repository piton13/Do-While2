/**
 * @ngInject
 */
module.exports = function (todayService) {
    var vm = this;
    this.showedDays = 0;
    this.isSelected = false;
    this.todayDate = new Date();
    this.weekDays = [];

    todayService.getWeekTasks().success(function (tasks) {
        vm.weekDays = tasks;
    });

    vm.chooseTheDay = function (item) {
      vm.showedDays = item;
      vm.isSelected = !vm.isSelected;
    };
};
