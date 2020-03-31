const trap = (heights) => {
    if(heights.length == 0){
        return
    }
    let len = heights.length
    let leftMax = []
    let rightMax = []

    let res = 0

    leftMax[0] = heights[0]
    rightMax[len - 1] = heights[len-1]

    for(let i = 1; i < len; i++){
        left[i] = Math.max(leftMax[i-1],heights[i])
    }

    for(let i = len-2; i>=0; i--){
        rightMax[i] = Math.max(rightMax[i+1],heights[i])
    }

    for(let i = 0; i < len - 1; i++){
        res += Math.max(leftMax[i],rightMax[i]) - heights[i]
    }
    return res
}