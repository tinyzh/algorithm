const singleNumber = (nums) => {
    let res = 0
    for(let i = 0; i < nums.length; i++){
        res ^= nums[i]
        console.log(res)
    }
    return res
}

let arr = [4,10,2,2,10]
singleNumber(arr)