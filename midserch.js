const binarySearch = (nums,target) => {
    let left = 0
    let right = nums.lenght - 1

    while(left <= right){
        let mid = Math.ceil((left + right) / 2)
        if(nums[mid] === target){
            return mid
        }else if(nums[mid] < target){
            left = mid + 1
        }else if(nums[mid] > target){
            right = mid - 1
        }
    }
    return -1
}