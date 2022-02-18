export function arrayConversion(inputArray: number[]): any {
    let isOdd = true;

    while(inputArray.length !== 1){
        inputArray = sumProduct(inputArray,isOdd)
        isOdd = !isOdd
    }
    return inputArray[0]
}

function sumProduct(nums:number[], isOdd:boolean): number[]{
    const sumProduct:number[] = [];

    if(isOdd){
        for(let i=0 ; i<nums.length ; i+=2){
            sumProduct.push(nums[i] + nums[i+1]);
        }
    } else {
        for(let i=0 ; i<nums.length ; i+=2){
            sumProduct.push(nums[i] *  nums[i+1]);
        }
    }
    return sumProduct;
}




console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14,15,16]));


//// secound solution /////
  // let arr = []

    // while (true) {
    //     let sumArr: number[] = []
    //     let proArr: number[] = []

    //     if (inputArray.length !== 1) {
    //         for (let i = 0; i < inputArray.length; i++) {
    //             if (i % 2 == 0) sumArr.push(inputArray[i] + inputArray[i + 1])
    //         }
    //         inputArray = [...sumArr]
    //     }
    //     if (inputArray.length !== 1) {
    //         for (let j = 0; j < inputArray.length; j++) {
    //             if (j % 2 == 0) proArr.push(sumArr[j] * sumArr[j + 1])
    //         }
    //         console.log(inputArray);
    //         inputArray = [...proArr]
    //     } else return inputArray[0]

    // }