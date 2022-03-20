export function containsDuplicates(a: number[]): boolean {
    let store = {}
    for (let i = 0; i < a.length; i++) {

        if (store[a[i]]) return true
        else store[a[i]] = a[i]

    }
    return false
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
