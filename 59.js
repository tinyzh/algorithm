let arr = [3,2,3,1,1,4]

const jumping = (arr) => {
    if(arr == null || arr.length == 0){
        return 0
    }
    // 目前跳了多少步
    let jump = 0
    // 如果只能跳jump步 最远能到达的位置 这里也是索引
    let cur = 0
    // 如果再多跳一步 最远能到达的位置 这里是索引
    let next = 0
    for(let i = 0; i < arr.length; i++){
        if(cur < i){
            jump++
            cur = next
        }
        next = Math.max(next, i + arr[i])
    }
    return jump
}

console.log(jumping(arr))

// let nums = [2,1,1,1,4]
// const canJump = (arr) => {
//     let k = 0
//     for(let i = 0; i < nums.length; i++){
//         if(k >= nums.length) return true
//         if(i > k) return false
//         console.log(k)
//         k = Math.max(k,i + nums[i])
//     }
//     // console.log('in',k)
//     return true
// }

// console.log(canJump(nums))
