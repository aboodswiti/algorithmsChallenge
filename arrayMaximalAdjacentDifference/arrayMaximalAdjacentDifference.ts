export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let max = 0;
    let dif = 0;
    
    for(let i=0 ; i<inputArray.length -1; i++){
      dif = Math.abs(inputArray[i] - inputArray[i+1])
      if(max < dif) max = dif
    }
    return max;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));