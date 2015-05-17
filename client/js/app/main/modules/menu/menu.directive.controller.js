var angular = require('angular'),
    menuEvents = require('./menu.events');

/*
 * @ngInject
 * */
module.exports = function ($scope, $filter, todayDate, todayService) {
    var vm = this;
    this.isVisible = false;
    this.tasksList = [];
    this.badges = [];
    this.todayLong = $filter('date')(todayDate, "d MMM yyyy").toLowerCase();

    $scope.$onRootScope(menuEvents.changeVisibility, function (event, isVisible) {
        if (angular.isUndefined(isVisible)) {
            isVisible = !vm.isVisible;
        }

        vm.isVisible = isVisible;
        event.stopPropagation();
    });

    todayService.getTasks(function (res) {
        vm.tasksList = res.data;

        var badges = [];
        angular.forEach(vm.tasksList, function(item){
          if (!!item.projectColor && item.date === vm.todayLong){
            if (badges.length === 0) {badges.push(item.projectColor);}
            else {
              var status = false;
              for (var prop in badges) {
                if (badges[prop] === item.projectColor) {status = true;}
              }
              if (!status) {badges.push(item.projectColor);}
            }
          }
        });
        vm.badges = badges;
    });
};
