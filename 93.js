const subsets = (nums) => {
    if(nums.length == 0) return []

    let last = nums.pop()

    let res = subsets(nums)

    let length = res.length
    for(let i = 0; i < length; i++){
        res.push(res[i])
        res[res.length-1].push(n)
    }
    return res
}