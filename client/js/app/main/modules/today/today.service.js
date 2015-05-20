/**
 * @ngInject
 */
module.exports = function ($http, apiConfig) {

    this.getAllTasks = function (config) {
        return $http.get(apiConfig.basePath + '/tasks.json', config);
    };

    this.getTodayTasks = function () {
        var date = new Date(); // "2015-05-17" as example can be used
        return this.getAllTasks({
            transformResponse: appendTransform($http.defaults.transformResponse, function (tasks) {
                tasks = mapDate(tasks);
                return filterByDate(tasks, date);
            })
        });
    };

    this.getWeekTasks = function () {
        var weekTasks = [],
            dates = [],
            oneDay = 1000*60*60*24,
            todayDate = new Date();

        return this.getAllTasks({
            transformResponse: appendTransform($http.defaults.transformResponse, function (tasks) {

                tasks = mapDate(tasks);

                for (var i=0; i<7; i++) {
                  dates[i] = new Date(todayDate.valueOf()+i*oneDay);
                  weekTasks.push({
                    date: dates[i],
                    tasks: filterByDate(tasks, dates[i])
                  });
                }
                return weekTasks;
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

    function filterByDate(tasks, date) {
        return tasks.reduce(function (todayTasks, task) {
            if (isDateEquals(task.date, date))
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
