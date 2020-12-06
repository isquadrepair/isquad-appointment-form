export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '')
  );
}

export const time24To12 = function (a) {
  //below date doesn't matter.
  return new Date('1955-11-05T' + a + 'Z').toLocaleTimeString('bestfit', {
    timeZone: 'UTC',
    hour12: !0,
    hour: 'numeric',
    minute: 'numeric',
  });
};

export const getFormattedTime = function (hour, min) {
  var postfix = 'AM';
  //format hours in am/pm
  if (hour > 12) {
    hour = hour - 12 === 0 ? 12 : hour - 12;
    postfix = hour === 0 ? 'AM' : 'PM';
  }

  //format minutes
  min = ('' + min).length > 1 ? min : '0' + min;
  return hour + ':' + min + ' ' + postfix;
};
export function getDayOfWeek(date) {
  var dayOfWeek = new Date(date).getDay();
  return isNaN(dayOfWeek)
    ? null
    : [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ][dayOfWeek];
}
