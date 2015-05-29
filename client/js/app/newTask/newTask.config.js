/**
 * @ngInject
 */
module.exports = function ($stateProvider) {
    $stateProvider.state('newTask', {
        url: '/newTask',
        templateUrl: 'newTask.view.html'
    });
};
