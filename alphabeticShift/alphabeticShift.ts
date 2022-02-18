export function alphabeticShift(inputString: string): string {
    const char = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    const strArr = inputString.split("");
    const shiftedArr = []
    for (let i = 0; i < strArr.length; i++) {
        let index = 0
        if (strArr[i] !== "z") index = char.indexOf(strArr[i]) + 1;

        shiftedArr.push(char[index])
    }
    return shiftedArr.join("")




}

console.log(alphabeticShift('crazy'));
console.log(alphabeticShift('abcdefgh'));