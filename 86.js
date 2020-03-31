var findMin = function(nums) {
    if(nums.length == 1){
        return nums[0]
    }
    let left = 0
    let right = nums.length -1
    let mid = 0

    while(left <= right){
        if(nums[left] <= nums[right]){
            return nums[left]
        }
        mid = Math.ceil((left + right) / 2)

        // 说明left，mid是连续递增  那么最小元素肯定不在这个区间
        if(nums[left] <= nums[mid]){
            left = mid + 1
        }else{
            right = mid
        }
    }
    return -1

};