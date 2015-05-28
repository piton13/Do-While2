/**
 * @ngInject
 */
module.exports = function ($stateProvider) {
    $stateProvider.state('todo', {
        url: '/todo',
        templateUrl: 'todo.view.html'
    });
};