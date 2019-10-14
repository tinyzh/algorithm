// https://leetcode-cn.com/problems/largest-number-at-least-twice-of-others/
var dominantIndex = function(nums) {
    if(nums.length < 2) return 0
    let temp = [...nums].sort((a,b) => a - b)
    let max = temp[nums.length-1]
    if(temp[nums.length - 1] >= 2*temp[nums.length-2]){
        return nums.indexOf(max)
    }
    return -1
};