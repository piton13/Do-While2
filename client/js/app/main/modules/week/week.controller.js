/**
 * @ngInject
 */
module.exports = function (todayService, $filter, todayDate) {
    var vm = this,
        oneDay = 86400000,
        parsedDate = Date.parse(todayDate);
    this.tasks = [];
    this.weekDays = [];

    for (var i=0; i<7; i++) {
      this.weekDays.push({
        date:parsedDate+i*oneDay,
        dateFiltered: $filter('date')(parsedDate+i*oneDay, "d MMM yyyy").toLowerCase()
      });
    }

    this.todayDateLong = this.weekDays[0].dateFiltered;

    todayService.getTasks(function (res) {
        vm.tasks = res.data;
    });
};
