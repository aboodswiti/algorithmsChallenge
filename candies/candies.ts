export function candies(n: number, m: number): number {
    const num = Math.floor(m/n)
    // return m - m % n 
    return num * n
}

console.log(candies(3, 10));