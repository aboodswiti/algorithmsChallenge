export function arrayChange(inputArray: number[]): number {
    let count = 0;
    for(let i =0 ; i < inputArray.length ; i++){
        let dif = inputArray[i] - inputArray[i+1];
        if( dif >= 0) {
            inputArray[i+1] = inputArray[i+1] + dif + 1
            count += dif + 1
    }}
    
    return count;



}

console.log(arrayChange([1, 1, 1]));       // 3
console.log(arrayChange([1, 2, 1]));       // 2
console.log(arrayChange([2, 1, 10, 1]));   // 12

