export function getYearsArray(a: number = 1900, b: number = new Date().getFullYear()): string[] {
  const years: string[] = [];

  for (let year = b; year >= a; year--) {
    years.push(year.toString());
  }

  return years;
}
