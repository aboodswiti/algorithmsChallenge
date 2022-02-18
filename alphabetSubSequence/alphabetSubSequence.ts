export function alphabetSubsequence(s: string): boolean {
    const strArr = s.split("");
    const ascii = []

    strArr.forEach(char => {
        ascii.push(char.charCodeAt(0))
    })

    for (let i = 0; i < ascii.length; i++) {
        if (ascii[i] >= ascii[i + 1]) return false;
    }
    return true

}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
