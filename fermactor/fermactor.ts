export function fermactor(n: number): number[] {
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < i; j++) {
            let res = i ** 2 - j ** 2
            if (res == n) return [i, j]
        }

    }
}

console.log(fermactor(15));