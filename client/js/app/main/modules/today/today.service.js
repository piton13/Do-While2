/**
 * @ngInject
 */
module.exports = function ($http, apiConfig) {

    this.getAllTasks = function (config) {
        return $http.get(apiConfig.basePath + '/tasks.json', config);
    };

    this.getTodayTasks = function () {
        return this.getAllTasks({
            transformResponse: appendTransform($http.defaults.transformResponse, function (tasks) {
                tasks = mapDate(tasks);
                return filterToday(tasks);
            })
        });
    };

    function appendTransform(defaults, transform) {
        defaults = angular.isArray(defaults) ? defaults : [defaults];
        return defaults.concat(transform);
    }

    function mapDate(tasks) {
        return tasks.map(function (task) {
            task.date = new Date(task.date);
            return task;
        });
    }

    function filterToday(tasks) {
        var now = new Date(); // "2015-05-17" as example can be used
        return tasks.reduce(function (todayTasks, task) {
            if (isDateEquals(task.date, now))
                todayTasks.push(task);
            return todayTasks;
        }, []);
    }

    function isDateEquals(a, b) {
        return a.getFullYear() === b.getFullYear() &&
            a.getMonth() === b.getMonth() &&
            a.getDay() === b.getDay();
    }
};
