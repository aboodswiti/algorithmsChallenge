export function arrayPreviousLess(items: number[]): number[] {
    const arr: number[] = [];

    for (let i = 0; i < items.length; i++) {

        console.log(items[i]);
        for (let j = i; j >= 0; j--) {
            if (items[i] > items[j]) {
                arr.push(items[j])
                break;
            }
            else if (j == 0) arr.push(-1)
        }
    }
    return arr;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));  // [-1, 3, -1, 2, 4].
console.log(arrayPreviousLess([1, 2, 3, 4, 5]));  // [-1, 2, 3, 4, 5].
console.log(arrayPreviousLess([5, 4, 3, 2, 1]));  // [-1, -1, -1, -1, -1].
