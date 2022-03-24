export function factorializeANumber(num: number): number {
    let factorial: number = 1;
    if (num == 0) return 1;
    else {
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
    }
    return factorial;
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));
console.log(factorializeANumber(0));
