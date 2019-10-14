// //https://leetcode-cn.com/explore/learn/card/array-and-string/198/introduction-to-array/770/

// 给定一个整数类型的数组 nums，请编写一个能够返回数组“中心索引”的方法。

// 我们是这样定义数组中心索引的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。

// 如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。


// mine
var pivotIndex = function (nums) {
    let index = 0

    while (amount(nums.slice(0, index)) !== amount(nums.slice(index + 1)) && index < nums.length) {
        index++
    }
    return index === nums.length ? -1 : index
};

let amount = (arr) => {
    return arr.reduce((a, b) => a + b, 0)
}


// 参考
// 思路：
// 我们的目标是求出中心索引 所以 中心索引的数+左右两边的和是等于总数的
// 又因为我们的目标是左右两边的数相等 所以直接让左边的数的总和*2就行了，
// 然后每次不匹配就往下走，并把左边的总数赋值给current
let pivot = (nums) => {
    if(nums.length < 3) return -1
    let amount = nums.reduce((a,b) => a+b,0)
    let current = 0
    for(let i= 0; i < nums.length; i++){
        if(current*2 + nums[i] === amount) return i
        current = current + nums[i]
    }
    return -1
}