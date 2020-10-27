var rob = function(nums) {
    let len = nums.length
    if(len == 0) return 0
    if(len == 1) return nums[0]
    return Math.max(mes(nums.slice(0,len-1)),mes(nums.slice(1)))
};

const mes = (nums) => {
    let len = nums.length
    let dp = Array(len).fill(0)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0],nums[1])
    for(let i = 2; i < len; i++){
        dp[i] = Math.max(dp[i-1],dp[i-2] + nums[i])
    }
    return dp[len-1]
}

var massage = function(nums) {
    let len = nums.length
    if(len == 0){
        return 0
    }
    if(len == 1){
        return nums[0]
    }
    let dp = Array(len).fill(0)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0],nums[1])
    for(let i = 2; i < len; i++){
        dp[i] = Math.max(dp[i-1],dp[i-2] + nums[i])
    }
    return dp[len-1]
};

let res = mes([3,1,3,100])
console.log(res)