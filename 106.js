const threeSum = (nums) => {
    let n = nums.length
    if(n == 0 || n < 3){
        return []
    }
    nums.sort()
    let res = []
    for(let i = 0; i < n; i++){
        if(nums[i] > 0){
            return res
        }
        if(i > 0 && nums[i] == nums[i-1]){
            continue
        }
        let L = i+1
        let R = n-1
        while(L < R){
            if(nums[i]+nums[L]+nums[R]==0){
                res.push([nums[i],nums[L],nums[R]])
                while(L<R && nums[L] == nums[L+1]){
                    L++
                }
                while(L<R&& nums[R] == nums[R-1]){
                    R--
                }
            }else if(nums[i]+nums[L]+nums[R] > 0){
                R--
            }else{
                L++
            }
        }
    }
    return res
}