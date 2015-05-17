/**
 * @ngInject
 */
module.exports = function (todayService) {
    var vm = this,
        oneDay = 86400000,
        todayDate = new Date(),
        todayJSON = todayDate.toJSON().substr(0,10),
        parsedDate = Date.parse(todayDate);
    this.todayDate = todayDate;
    this.tasks = [];
    this.weekDays = [];

    for (var i=0; i<7; i++) {
      vm.weekDays.push({
        date:parsedDate+i*oneDay,
        //dateFiltered: $filter('date')(parsedDate+i*oneDay, "d MMM yyyy").toLowerCase()
      });
    }

    //this.todayDateLong = this.weekDays[0].dateFiltered;

    todayService.getTasks(function (res) {
        vm.tasks = res.data;
    });
};

/*
todayService.getTasks(function (res) {
    for (var i=0; i<res.data.length; i++){
      if (res.data[i].date.substr(0,10) === todayJSON) {
        vm.tasks.push(res.data[i]);
      }
    }
});*/
