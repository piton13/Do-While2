/*
 * @ngInject
 * */
module.exports = function ($scope, projectService) {

  $scope.submitted = false;
  $scope.addNewProject = function(){
      projectService
          .create($scope);

      alert('Project "'+$scope.name+'" with "' + $scope.color + '" color was added!');
      $scope.name = null;
      $scope.color = null;
      $scope.submitted = false;
      $scope.createProject.$pristine = true;
  };
};
