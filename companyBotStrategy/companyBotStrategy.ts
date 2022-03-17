export function companyBotStrategy(trainingData: number[][]): number {
    let total = 0
    let count = 0
    for(let i=0; i<trainingData.length;i++){
        if(trainingData[i][1] == 1) {
            total += trainingData[i][0]
            count++
        }
    }
    return total/count  || 0;
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy([[4, -1], [0, 0], [5, -1]]));
