const towSum = (nums, target) => {
    let left = 0
    let right = nums.length - 1
    while(left < right){
        let sum = nums[left] + nums[right]
        if(sum == target){
            return [left+1, right+1]
        }else if(sum < target){
            left++
        }else if(sum > target){
            right--
        }
    }
    return [left+1,right+1]
}