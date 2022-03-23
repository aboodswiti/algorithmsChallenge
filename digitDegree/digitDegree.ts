export function digitDegree(n: any): number {
    let count = 0;

    while (true) {
        if (n <= 9) break;
        const num = n.toString().split('')
        n = num.reduce((a, b) => parseInt(a) + parseInt(b))
        count++
    }
    return count
}
console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));
console.log(digitDegree(88));
