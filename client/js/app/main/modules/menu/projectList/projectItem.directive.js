/**
 * @ngInject
 */
module.exports = function () {
    return {
        restrict: 'E',
        required: '^dwProjectList',
        replace: true,
        transclude: true,
        scope: {
            project: '='
        },
        templateUrl: 'projectItem.template.html'
    };
};
