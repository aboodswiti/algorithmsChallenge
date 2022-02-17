export function addTwoDigits(n: any): number {

    const numArr = n.toString().split("")
    let sum : number = 0
    for(const num of numArr){
       sum += parseInt(num) 
    }

    return sum;

}

console.log(addTwoDigits(29));
console.log(addTwoDigits(84));
