export function centuryFromYear(year: number): number {
return Math.ceil(year/100)
}

console.log(centuryFromYear(1904));
console.log(centuryFromYear(1700));