/**
 * @ngInject
 */
module.exports = function (todayService) {
    var vm = this;
    this.colors = [];

    todayService.getTasks(function (response) {
        var tasks = response.data,
            nowDate = new Date("2015-05-18"),
            todayTasks = [],
            colors = [];

        function isDateEquals(a, b) {
            return a.getFullYear() === b.getFullYear() &&
                a.getMonth() === b.getMonth() &&
                a.getDay() === b.getDay();
        }

        for (var i = 0; i < tasks.length; i++)
            if (isDateEquals(new Date(tasks[i].date), nowDate))
                todayTasks.push(tasks[i]);

        angular.forEach(todayTasks, function (item) {
            function color(color) {
                for (var i = 0; i < colors.length; i++)
                    if (colors[i] === color)
                        return true;
                return false;
            }

            if (!color(item.projectColor))
                colors.push(item.projectColor);
        });

        vm.colors = colors;
    });
};