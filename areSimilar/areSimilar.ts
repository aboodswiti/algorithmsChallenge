export function areSimilar(a: number[], b: number[]): boolean {
    const swapA: number[] = [];
    let swapB: number[] = [];

    if (a.toString() === b.toString()) return true;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            swapA.push(a[i]);
            swapB.push(b[i]);
        }
    }
    swapB.reverse();

    if (swapA.length == 2 && (swapB.toString() === swapA.toString())) return true;

    return false;




}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
