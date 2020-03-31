const findNumbers = (nums) => {
    let list = []
    for(let i = 0; i < nums.length; i++){
        let idx = Math.abs(nums[i]) - 1
        if(nums[idx] > 0){
            nums[idx] = -nums[idx]
        }
    }

    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0){
            list.push(i + 1)
        }
    }
    return list
}

let arr = [4,3,2,7,8,2,3,1]

console.log(findNumbers)