export function getDate(date: Date) {
  let str = (new Intl.DateTimeFormat("ru", {dateStyle: "long"}).format(date))
  return str.substring(0, str.length - 2)
}

// function addDays(date: Date, days: number) {
//   let result = new Date(date);
//   result.setDate(result.getDate() + days);
//   return result;
// }