export function evenDigitsOnly(n: number): boolean {
    const num = n.toString().split("");

    return num.every((item) => parseInt(item) % 2 == 0)
}


console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));