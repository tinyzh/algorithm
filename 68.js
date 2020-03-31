var subarraySum = function(nums, k) {
    let res = 0
    let sum = 0
    let kmap = []
    kmap[0] = 1
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
        res += kmap[sum-k]
        kmap[sum]++
    }
    return res
};

for(let i = 0; i < 5; i++){
    setTimeout(() => {
        console.log(i)
    },0)
} 