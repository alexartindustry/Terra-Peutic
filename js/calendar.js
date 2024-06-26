document.addEventListener('DOMContentLoaded', function(){ //document.ready

var startDate = moment($('#startDate').val(),'MM-DD-YYYY');//MM-DD-YYYY
var endDate = moment($('#endDate').val(),'MM-DD-YYYY');//MM-DD-YYYY

var start_week = moment(startDate).startOf('week');//day in the begin of the week
var end_week = moment(endDate).endOf('week');//day in the end of the week
var previous = moment(startDate).subtract(1, 'days'); //day before start day


var container = document.getElementById('calendar');
var daysText = '';
var emptyText = '';

var getDaysBetweenDates = function(startDate, endDate) {
    var now = startDate.clone(), dates = [];

    while (now.isSameOrBefore(endDate)) {
        dates.push(now.format('MM-DD-YYYY'));
        now.add(1, 'days');
    }
    return dates;
};

var dateList = getDaysBetweenDates(startDate, endDate);

for (let i = 0; i < dateList.length; i++) {
    var date = dateList[i];
    var class_str = '';
    if(!i) {
        class_str = ' first active';
    } else if(i == dateList.length - 1) {
        class_str = ' last';
    }
    var str = moment(date, 'MM-DD-YYYY').format( 'dddd' ) + ', ' + moment(date, 'MM-DD-YYYY').format('MMMM') + ' ' + moment(date, 'MM-DD-YYYY').format('DD') + ', ' + moment(date, 'MM-DD-YYYY').format('YYYY');
    daysText += '<div class="day-item'+ class_str +'" day-str="'+str+'" day-num="'+ (i+1) +'"><span class="weekday">'+ moment(date, 'MM-DD-YYYY').format( 'dddd' ) +'</span><span class="day">'+ moment(date, 'MM-DD-YYYY').format('D') +'</span><span class="month">'+ moment(date, 'MM-DD-YYYY').format('MMMM') +'</span><span class="year">'+ moment(date, 'MM-DD-YYYY').format('Y') +'</span><img src="img/next.svg" class="next-arrow" alt="next day" /></div>';
}

container.innerHTML = daysText;

var emptyList = getDaysBetweenDates(start_week, previous);
for (let i = 0; i < emptyList.length; i++) {
    var date = emptyList[i];
    emptyText += '<div class="day-item empty"></div>';
}

container.innerHTML = emptyText + container.innerHTML;

});
