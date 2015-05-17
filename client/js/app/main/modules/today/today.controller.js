/**
 * @ngInject
 */
module.exports = function (todayService, $filter, todayDate) {
    var vm = this;
    this.tasks = [];
    this.todayLong = $filter('date')(todayDate, "d MMM yyyy").toLowerCase();

    todayService.getTasks(function (res) {
        vm.tasks = res.data;
    });
};
