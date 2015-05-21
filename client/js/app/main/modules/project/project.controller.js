/**
 * @ngInject
 */
module.exports = function ($stateParams, projectService) {
    var vm = this;
    this.tasks = [];

    var id = $stateParams.projectId;

    projectService.getById(id)
        .success(function (project) {
            vm.color = project.color;
            vm.name = project.name;

        projectService.getTasks(id)
            .success(function (response) {
                vm.tasks = response.items;
            });
        });
};
