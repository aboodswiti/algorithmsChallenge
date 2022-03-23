export function extractEachKth(inputArray: number[], k: number): number[] {

    return inputArray.filter((item,i) => (i+1) % k !== 0 )
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
