/*
* @ngInject
* */
function WeekDayCtrl(calendarService) {
    if(calendarService.isDateEquals(this.date, new Date))
    	this.toggleSelection();
}

WeekDayCtrl._selected = null;

WeekDayCtrl.prototype.toggleSelection = function () {
    WeekDayCtrl._selected = this;
    this.onSelected(this.date);
};

WeekDayCtrl.prototype.isSelected = function() {
	return this === WeekDayCtrl._selected;
}

module.exports = WeekDayCtrl;