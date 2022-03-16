export function checkPalindrome(inputString: string): boolean {
    const string = inputString.toLocaleLowerCase();
    const reverseStr = string.split("").reverse().join("");
    return reverseStr == string

}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
