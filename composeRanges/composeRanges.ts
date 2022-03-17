export function composeRanges(nums: number[]): string[] {
    const rangeArr = []
    let start = 0
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] - nums[i + 1] != -1 || i + 1 == nums.length) {
            if (nums[start] == nums[i]) rangeArr.push(nums[start].toString())
            else rangeArr.push(nums[start] + "->" + nums[i])
            start = i + 1
        }
    }
    return rangeArr
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));
console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));
console.log(composeRanges([0,3,7,8]));
