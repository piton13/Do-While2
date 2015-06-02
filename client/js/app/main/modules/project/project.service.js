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

    this.create = function (project) {
        $http.post('/api/projects', { name: project.name.toLowerCase(), color: project.color.toLowerCase() });
    };

    this.getAllProjects = function () {
        return $http.get('/api/projects');
    };
};
