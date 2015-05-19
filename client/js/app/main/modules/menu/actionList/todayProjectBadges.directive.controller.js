/**
 * @ngInject
 */
module.exports = function (todayService) {
    var vm = this;
    this.colors = [];

    todayService.getTodayTasks()
        .success(function (tasks) {
            vm.colors = tasks.reduce(function (colors, task) {
                function hasColor(color) {
                    for (var i = 0; i < colors.length; i++)
                        if (colors[i] === color)
                            return true;
                    return false;
                }

                if (!hasColor(task.projectColor))
                    colors.push(task.projectColor);

                return colors;
            }, vm.colors);
        });
};