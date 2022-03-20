export function containsCloseNums(nums: number[], k: number): boolean {

    let store = {}

    for(let i=0; i< nums.length ; i++){
        if(store[nums[i]]) {
           if(Math.abs(store[nums[i]] - i ) <= k) return true;
        } else store[nums[i]] = i
    }
    return false

}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));