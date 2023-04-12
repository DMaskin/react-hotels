export function dateToString(date: Date, cutCount: number) {
  let str = (new Intl.DateTimeFormat("ru", {dateStyle: "long"}).format(date))
  return str.substring(0, str.length - cutCount)
}

export function addDays(date: Date, days: number) {
  const newDate = new Date(date)
  newDate.setMilliseconds(date.getMilliseconds() + days * 24 * 3600 * 1000)
  return newDate
}
