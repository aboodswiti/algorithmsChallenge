export function alternatingSums(a: number[]): number[] {
    
    let oddSum = 0;
    let evenSum = 0;

    a.forEach((num, index) => {
        if(index % 2 ===0) evenSum+= num
        else oddSum+= num
    })

    return [evenSum,oddSum]


    ////// SECOUND SOLUTION ///

    // let firstTeam = 0;
    // let secTeam = 0;
    // for (let i = 0; i < a.length; i += 2) {
    //     firstTeam += a[i]
    //     if (i == a.length - 1) continue
    //     secTeam += a[i + 1]

    // }
    // return [firstTeam, secTeam]

}

console.log(alternatingSums([50, 60, 60, 45, 70]))
console.log(alternatingSums([20, 30, 20, 30, 20, 30, 20]))
