/**
 * @ng-Inject
 */
module.exports = function ($scope) {

  $scope.submitted = false;
  $scope.projects = [
    {name: 'education', color: 'green'},
    {name: 'work', color: 'blue'},
    {name: 'home', color: 'red'},
    {name: 'study', color: 'orange'},
    {name: 'health', color: 'violet'},
  ];
};
