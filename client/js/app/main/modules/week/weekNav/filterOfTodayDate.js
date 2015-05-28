/**
 * @ng-Inject
 */
function isDayToday(item) {
  var today = new Date();
  if (item.getFullYear() === today.getFullYear() &&
    item.getMonth() === today.getMonth() &&
    item.getDate() === today.getDate()) {
    return true;
  } else {
    return false;
  }
}

module.exports = function() {
  return function(item) {
    var x = item.getDay();
    if (isDayToday(item)) {
      return 'today';
    } else {
      switch (x) {
        case 0:
          return 'sun';
        case 1:
          return 'mon';
        case 2:
          return 'tue';
        case 3:
          return 'wed';
        case 4:
          return 'thu';
        case 5:
          return 'fri';
        case 6:
          return 'sat';
        default:
          return undefined;
      }
    }
  };
};
