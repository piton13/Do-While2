/**
 * @ngInject
 */
module.exports = function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var currentColor;

            function getColorClass(color) {
                if(!color)
                    return "";
                return "color_" + color;
            }

            function updateColorClass(newColor) {
                if (currentColor)
                    element.removeClass(getColorClass(currentColor));
                element.addClass(getColorClass(newColor));
                currentColor = newColor;
            }

            scope.$watch(attrs.dwColor, function (color) {
                updateColorClass(color);
            });
        }
    };
};