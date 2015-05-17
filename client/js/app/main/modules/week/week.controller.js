/**
 * @ngInject
 */
module.exports = function (todayService, $filter, nowValue) {
    var vm = this,
        oneDay = 86400000,
        parsedDate = Date.parse(nowValue);
    this.tasks = [];
    this.todayLong = $filter('date')(nowValue, "d MMM yyyy").toLowerCase();
    this.weekDays = [];

    for (var i=0; i<7; i++) {
      this.weekDays.push({
        date:parsedDate+i*oneDay,
        dateFiltered: $filter('date')(parsedDate+i*oneDay, "d MMM yyyy").toLowerCase()
      });
    }

    todayService.getTasks(function (res) {
        vm.tasks = res.data;
    });

    console.log(oneDay);
    console.log(parsedDate);
    console.log(nowValue);

};
