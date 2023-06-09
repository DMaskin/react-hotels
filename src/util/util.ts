export function dateToString(date: Date, cutCount: number): string {
  const str = new Intl.DateTimeFormat("ru", { dateStyle: "long" }).format(date)
  return str.substring(0, str.length - cutCount)
}

export function addDays(date: Date, days: number): Date {
  const newDate = new Date(date)
  newDate.setMilliseconds(date.getMilliseconds() + days * 24 * 3600 * 1000)
  return newDate
}

export function createLabel(n: number, titles: string[]): string {
  const cases = [2, 0, 1, 1, 1, 2]
  return `${titles[n % 100 > 4 && n % 100 < 20 ? 2 : cases[n % 10 < 5 ? n % 10 : 5]]}`
}
