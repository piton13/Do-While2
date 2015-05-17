/**
 * @ngInject
 */
module.exports = function (todayService) {
    var vm = this,
        timeZone = 1000*60*60*3,
        todayDate = new Date(),
        parsedDate = Date.parse(todayDate),
        todayJSON = new Date(parsedDate+timeZone).toJSON().substr(0,10);
    this.todayDate = todayDate;
    this.tasks = [];

    todayService.getTasks(function (res) {
        for (var i=0; i<res.data.length; i++){
          if (res.data[i].date.substr(0,10) === todayJSON) {
            vm.tasks.push(res.data[i]);
          }
        }
    });
};
