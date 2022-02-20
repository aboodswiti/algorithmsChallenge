export function isCaseInsensitivePalindrome(inputString: string): boolean {
    let strArr = inputString.toLocaleLowerCase()
    let revStrArr = strArr.split("").reverse().join("")

    return strArr === revStrArr
  

    


}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));