var angular = require('angular');

module.exports = function (state, parent) {
    var resultViews = {},
        views = parent(state);

    function tryResolveTemplateKey(view) {
        if (angular.isUndefined(view.templateKey))
            return;
        view.templateProvider = function ($templateCache) {
            return $templateCache.get(view.templateKey);
        };
    }

    angular.forEach(views, function (view, name) {
        tryResolveTemplateKey(view);
        resultViews[name] = view;
    });

    return resultViews;
};
