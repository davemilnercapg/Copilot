/* functions to add and subtract dates */

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function subtractDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
}

function addWeeks(date, weeks) {
    var result = new Date(date);
    result.setDate(result.getDate() + weeks * 7);
    return result;
}

function subtractWeeks(date, weeks) {        
    var result = new Date(date);
    result.setDate(result.getDate() - weeks * 7);
    return result;
}

function addMonths(date, months) {
    var result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
}

function subtractMonths(date, months) {
    var result = new Date(date);
    result.setMonth(result.getMonth() - months);
    return result;
}

function addYears(date, years) {
    var result = new Date(date);
    result.setFullYear(result.getFullYear() + years);
    return result;
}

function subtractYears(date, years) {   
    var result = new Date(date);
    result.setFullYear(result.getFullYear() - years);
    return result;
}

function addHours(date, hours) {
    var result = new Date(date);
    result.setHours(result.getHours() + hours);
    return result;
}

function subtractHours(date, hours) {
    var result = new Date(date);
    result.setHours(result.getHours() - hours);
    return result;
}

function addMinutes(date, minutes) {    
    var result = new Date(date);
    result.setMinutes(result.getMinutes() + minutes);
    return result;
}

function subtractMinutes(date, minutes) {
    var result = new Date(date);
    result.setMinutes(result.getMinutes() - minutes);
    return result;
}

function addSeconds(date, seconds) {
    var result = new Date(date);
    result.setSeconds(result.getSeconds() + seconds);
    return result;
}

function subtractSeconds(date, seconds) {    
    var result = new Date(date);
    result.setSeconds(result.getSeconds() - seconds);
    return result;
}

function addMilliseconds(date, milliseconds) {
    var result = new Date(date);
    result.setMilliseconds(result.getMilliseconds() + milliseconds);
    return result;
}

function subtractMilliseconds(date, milliseconds) {
    var result = new Date(date);
    result.setMilliseconds(result.getMilliseconds() - milliseconds);
    return result;
}

function addTime(date, time) {
    var result = new Date(date);
    result.setTime(result.getTime() + time);
    return result;
}   

function subtractTime(date, time) {
    var result = new Date(date);
    result.setTime(result.getTime() - time);
    return result;
}           

function addDate(date, years, months, weeks, days) {
    var result = new Date(date);
    result.setFullYear(result.getFullYear() + years);
    result.setMonth(result.getMonth() + months);
    result.setDate(result.getDate() + weeks * 7 + days);
    return result;
}

function subtractDate(date, years, months, weeks, days) {
    var result = new Date(date);
    result.setFullYear(result.getFullYear() - years);
    result.setMonth(result.getMonth() - months);
    result.setDate(result.getDate() - weeks * 7 - days);
    return result;
}

function addTimeSpan(date, hours, minutes, seconds, milliseconds) {
    var result = new Date(date);
    result.setHours(result.getHours() + hours);
    result.setMinutes(result.getMinutes() + minutes);
    result.setSeconds(result.getSeconds() + seconds);
    result.setMilliseconds(result.getMilliseconds() + milliseconds);
    return result;
}

function subtractTimeSpan(date, hours, minutes, seconds, milliseconds) {
    var result = new Date(date);
    result.setHours(result.getHours() - hours);
    result.setMinutes(result.getMinutes() - minutes);
    result.setSeconds(result.getSeconds() - seconds);
    result.setMilliseconds(result.getMilliseconds() - milliseconds);
    return result;
}

function addTimeSpan(date, timeSpan) {
    var result = new Date(date);
    result.setTime(result.getTime() + timeSpan);
    return result;
}   

function subtractTimeSpan(date, timeSpan) {
    var result = new Date(date);
    result.setTime(result.getTime() - timeSpan);
    return result;
}

function addDateAndTimeSpan(date, years, months, weeks, days, hours, minutes, seconds, milliseconds) {  
    var result = new Date(date);
    result.setFullYear(result.getFullYear() + years);
    result.setMonth(result.getMonth() + months);
    result.setDate(result.getDate() + weeks * 7 + days);
    result.setHours(result.getHours() + hours);
    result.setMinutes(result.getMinutes() + minutes);
    result.setSeconds(result.getSeconds() + seconds);
    result.setMilliseconds(result.getMilliseconds() + milliseconds);
    return result;
}

function subtractDateAndTimeSpan(date, years, months, weeks, days, hours, minutes, seconds, milliseconds) {
    var result = new Date(date);
    result.setFullYear(result.getFullYear() - years);
    result.setMonth(result.getMonth() - months);
    result.setDate(result.getDate() - weeks * 7 - days);
    result.setHours(result.getHours() - hours);
    result.setMinutes(result.getMinutes() - minutes);
    result.setSeconds(result.getSeconds() - seconds);
    result.setMilliseconds(result.getMilliseconds() - milliseconds);
    return result;
}

function addDateAndTimeSpan(date, timeSpan) {
    var result = new Date(date);
    result.setTime(result.getTime() + timeSpan);
    return result;
}

function subtractDateAndTimeSpan(date, timeSpan) {
    var result = new Date(date);
    result.setTime(result.getTime() - timeSpan);
    return result;
}

function addTimeSpanAndDate(date, years, months, weeks, days, hours, minutes, seconds, milliseconds) {  
    var result = new Date(date);
    result.setFullYear(result.getFullYear() + years);
    result.setMonth(result.getMonth() + months);
    result.setDate(result.getDate() + weeks * 7 + days);
    result.setHours(result.getHours() + hours);
    result.setMinutes(result.getMinutes() + minutes);
    result.setSeconds(result.getSeconds() + seconds);
    result.setMilliseconds(result.getMilliseconds() + milliseconds);
    return result;
}

function subtractTimeSpanAndDate(date, years, months, weeks, days, hours, minutes, seconds, milliseconds) {
    var result = new Date(date);
    result.setFullYear(result.getFullYear() - years);
    result.setMonth(result.getMonth() - months);
    result.setDate(result.getDate() - weeks * 7 - days);
    result.setHours(result.getHours() - hours);
    result.setMinutes(result.getMinutes() - minutes);
    result.setSeconds(result.getSeconds() - seconds);
    result.setMilliseconds(result.getMilliseconds() - milliseconds);
    return result;
}
module.exports = {  
    addYears: addYears,
    subtractYears: subtractYears,
    addMonths: addMonths,
    subtractMonths: subtractMonths,
    addWeeks: addWeeks,
    subtractWeeks: subtractWeeks,
    addDays: addDays,
    subtractDays: subtractDays,
    addHours: addHours,
    subtractHours: subtractHours,
    addMinutes: addMinutes,
    subtractMinutes: subtractMinutes,
    addSeconds: addSeconds,
    subtractSeconds: subtractSeconds,
    addMilliseconds: addMilliseconds,
    subtractMilliseconds: subtractMilliseconds,
    addTime: addTime,
    subtractTime: subtractTime,
    addDate: addDate,
    subtractDate: subtractDate,
    addTimeSpan: addTimeSpan,
    subtractTimeSpan: subtractTimeSpan,
    addDateAndTimeSpan: addDateAndTimeSpan,
    subtractDateAndTimeSpan: subtractDateAndTimeSpan,
    addTimeSpanAndDate: addTimeSpanAndDate,
    subtractTimeSpanAndDate: subtractTimeSpanAndDate
};
},{}],2:[function(require,module,exports){  
var date = require('./date');

function addYears(date, years) {
    return date.addYears(date, years);
}

