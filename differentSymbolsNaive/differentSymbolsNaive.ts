export function differentSymbolsNaive(s: string): number {
    const store = {};


    for (let i = 0; i < s.length; i++) {
        store[s[i]] = 1
    }
    return Object.keys(store).length
}

console.log(differentSymbolsNaive('cabca'));
