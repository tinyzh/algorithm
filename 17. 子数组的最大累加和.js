const maxSum = (arr) => {
    if(arr == null || arr.length == 0){
        return 0
    }
    let max = 0
    let cur = 0
    for(let i = 0; i < arr.length; i++){
        cur += arr[i]
        max = Math.max(max,cur)
        cur = cur < 0 ? 0 : cur
    }
    return max
}

let arr = [1,-2,3,5,-2,6,-1]

console.log(maxSum(arr))