export function adjacentElementsProduct(inputArray: number[]): number {

    let max : number = null

    for(let i =0 ; i<inputArray.length ; i++){
        let result = inputArray[i] * inputArray[i+1]
        if(result > max) max = result
    }
    return max


}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([7, 6, -2, -5, 7, 7]));
