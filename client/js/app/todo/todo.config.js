/**
 * @ngInject
 */
module.exports = function ($stateProvider) {
    $stateProvider.state('todo', {
        url: '/todo',
        templateKey: 'todo.view.html'
    });
};