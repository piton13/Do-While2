/**
 * @ngInject
 */
module.exports = function (todayService) {
    var vm = this,
        oneDay = 86400000,
        timeZone = 1000*60*60*3,
        todayDate = new Date(),
        parsedDate = Date.parse(todayDate);
    this.todayDate = todayDate;
    this.weekDays = [];

    for (var i=0; i<7; i++) {
      vm.weekDays.push({
        date: new Date(parsedDate+i*oneDay+timeZone).toJSON().substr(0,10),
        tasks: []
      });
    }

    todayService.getTasks(function (res) {

        for (var i=0; i<7; i++) {
          for (var j=0; j<res.data.length; j++){
            if (res.data[j].date.substr(0,10) === vm.weekDays[i].date) {
              vm.weekDays[i].tasks.push(res.data[j]);
            }
          }
        }
    });
};
