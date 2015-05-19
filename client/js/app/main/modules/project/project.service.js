/**
 * @ngInject
 */
module.exports = function ($http, apiConfig) {

    this.getById = function (id) {
        return $http.get(apiConfig.basePath + '/projects/' + id + '.json');
    };

    this.getTasks = function (id) {
        return $http.get(apiConfig.basePath + '/projects/' + id + '/tasks.json');
    };
};