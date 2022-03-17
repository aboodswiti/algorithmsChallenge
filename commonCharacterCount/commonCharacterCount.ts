export function commonCharacterCount(s1: string, s2: string): number {

    let arr1: string[] = s1.split("");
    let arr2: string[] = s2.split("");
    let count: number = 0;

    for (let i = 0; i < arr1.length; i++) {
        const index = arr2.indexOf(arr1[i])
        if (index !== -1) {
            count++
            arr2.splice(index, 1)
        }

    }
    return count;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));