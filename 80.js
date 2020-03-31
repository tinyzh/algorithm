// var findTargetSumWays = function(nums, res) {
//     // 引用传值
//     let count = []
//     count[0] = 0
//     calculate(nums,0,0,res,count)
//     return count[0]

// };

// const calculate = (nums,i,sum,res,count) => {
//     // 走到最后
//     if(i == nums.length){
//         // 结果等于传入的值
//         if(sum == res){
//             count[0] = count[0] + 1
//         }
//     }else{
//         // 数字前面分2种结果 加或者减
//         calculate(nums,i+1,sum+nums[i],res,count)
//         calculate(nums,i+1,sum-nums[i],res,count)
//     }
// }



const findWays = (nums, S) => {

    let sum = nums.reduce((a,b) => a+b,0)
    
    if(sum < S || (sum + S) % 2 == 1){
        return 0
    }
    // 这个w就是我们的正数和 我们要求到底有多少种组合的和为w
    // sum(N) = (S + sum(nums)) / 2`
    // sum(N) = w
    let w = (sum + S) / 2
    let dp = Array(w+1).fill(0)
    // 为什么第一位要取1，因为当背包为0的时候，我们不需要取任何值到背包中，都满足条件，所以这里取1
    dp[0] = 1

    for(let num of nums){
        // 对每个元素，看看他现有能和别的元素相加得到哪些位置的数
        for(let j = w; j >= num; j--){
            dp[j] += dp[j-num]
        }
    }
    console.log(dp)
    return dp[w]
}

let arr = [1,1,1,1,1]
console.log(findWays(arr,3))

这里我们用一种非常巧妙的记录方式：对于每个元素，我们看看他与正数和只差是多少，

这个结果处有没有其余的元素，没有我们就减一看看有没有其他元素，没有继续减一，

直到见到0，这时候其实就是它自己了。对下一个元素依然这样判断。

我们用一个标记来记录从0到正数和之间每个数当前用别的元素相加后能得到的个数，

最后遍历完所有元素后，看看正数和记录了多少种其余元素相加得到的次数，

就是我们要的方法数了。
