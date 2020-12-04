export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

export const time24To12 = function (a) {
  //below date doesn't matter.
  return (new Date("1955-11-05T" + a + "Z")).toLocaleTimeString("bestfit", {
    timeZone: "UTC",
    hour12: !0,
    hour: "numeric",
    minute: "numeric"
  });
};
