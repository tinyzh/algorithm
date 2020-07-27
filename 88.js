
// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: [3,4]

var searchRange = function(nums, target) {
    if(nums.length == 0){
        return [-1,-1]
    }

    let firstIndex = find(true,nums,target)
    let lastIndex = find(false,nums,target)
    return [firstIndex,lastIndex]
};

const find = (isFindFirst,nums,target) => {
    let begin = 0
    let end = nums.length - 1
    while(begin <= end){
        let mid = Math.floor((begin + end) / 2)
        if(nums[mid] < target){
            begin = mid + 1
        }else if(nums[mid] > target){
            end = mid - 1
        }else{
            // 发现目标值
            if(isFindFirst){ // 查找第一个
                // 如果元素不是第一个 并且元素mid等于mid前一个元素  end就需要往前移
                if(mid > 0 && nums[mid] == nums[mid-1]){
                    end = mid - 1
                }else{
                    return mid
                }
            }else{
                // 如果mid不是最后一个 并且mid等于mid后一个 begin就需要往后移
                if(mid < nums.length-1 && nums[mid] == nums[mid+1]){
                    begin = mid + 1
                }else{
                    return mid
                }
            }
        }
    }
    return -1
}