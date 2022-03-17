export function circleOfNumbers(n: number, firstNumber: number): number {
let half = n / 2;
if(firstNumber < half) return firstNumber + half
else return firstNumber - half
}

console.log(circleOfNumbers(10, 2));
console.log(circleOfNumbers(10, 7));
