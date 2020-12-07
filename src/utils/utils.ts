export const getFormattedTime = function (hour: number, min: string) {
  var postfix = 'AM';
  // format hours in am/pm
  if (hour > 12) {
    hour = hour - 12 === 0 ? 12 : hour - 12;
    postfix = hour === 0 ? 'AM' : 'PM';
  }
  // format minutes
  min = min.length > 1 ? min : '0' + min;
  return `${hour}:${min} ${postfix}`;
};

export function getDayOfWeek(date) {
  var dayOfWeek = new Date(date).getDay();
  return isNaN(dayOfWeek)
    ? null
    : [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ][dayOfWeek];
}
