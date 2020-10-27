let result = 0
const findTargetSumWays = (nums, S) => {
    if(nums.length == 0) return 0
    backtrack(nums,i,target)
    return result
}

const backtrack = (nums,i,rest) => {
    if(i == nums.length){
        if(rest == 0){
            result += 1
        }
        return
    }
    rest += nums[i]
    backtrack(nums,i+1,rest)
    rest -= nums[i]

    rest -= nums[i]
    backtrack(nums,i+1,rest)
    rest += nums[i]
}