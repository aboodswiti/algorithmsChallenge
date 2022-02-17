export function allLongestStrings(inputArray: string[]): string[] {
    let max = null
    for (const str of inputArray) {
        max = str.length > max ? str.length : max
    }
    const longestString = inputArray.filter((item) => item.length >= max)

    return longestString

}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));