// const trap = (height) => {
//     let sum = 0
//     // 最两端没有水 不用考虑 所以这里的范围是1到length-2
//     for(let i = 1;i < height.length-1; i++){
//         let max_left = 0
//         // 找出左边最高
//         for(let j = i-1; j>= 0;j--){
//             if(height[j] > max_left){
//                 max_left = height[j]
//             }
//         }
//         let max_right = 0
//         // 找出右边最高
//         for(let j = i + 1; j < height.length; j++){
//             if(height[j] > max_right){
//                 max_right = height[j]
//             }
//         }

//         // 找出两端较小
//         let min = Math.min(max_left,max_right)
//         if(min > height[i]){
//             sum = sum + (min - height[i])
//         }
//     }
//     return sum
// }

// const trap = (height) => {
//     let sum = 0
//     let max_left = Array(height.length).fill(0)
//     let max_right = Array(height.length).fill(0)

//     // 左边最高集合
//     for(let i = 1;i < height.length-1;i++){
//         max_left[i] = Math.max(max_left[i-1],height[i-1])
//     }

//     // 右边最高集合
//     for(let i = height.length-2; i>= 0;i--){
//         max_right[i] = Math.max(max_right[i+1],height[i+1])
//     }


//     for(let i = 1; i < height.length-1;i++){
//         // 找到当前墙左右最小高度 然后做对比
//         let min = Math.min(max_left[i],max_right[i])
//         if(min > height[i]){
//             sum = sum + (min - height[i])
//         }
//     }
//     return sum

// }

const trap = (height) => {
    let sum = 0
    let max_left = 0
    let max_right = 0
    let left = 1
    let right = height.length - 2

    for (let i = 1; i < height.length - 1; i++) {
        if (height[left - 1] < height[right + 1]) {
            max_left = Math.max(max_left, height[left - 1])
            let min = max_left
            if (min > height[left]) {
                sum = sum + (min - height[left])
            }
            left++
        }else{
            max_right = Math.max(max_right,height[right+1])
            let min = max_right
            if(min > height[right]){
                sum = sum + (min - height[right])
            }
            right--
        }
    }
    return sum

}

