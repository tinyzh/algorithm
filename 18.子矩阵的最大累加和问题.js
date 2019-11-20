const maxSum = (arr) => {
    if(arr == null || arr.length == 0 || arr[0].length == 0){
        return 0
    }
    let max = 0
    let cur = 0
    let s = null // 累加数组
    for(let i = 0; i != arr.length; i++){
        s = Array(arr[0].length).fill(0)
        for(let j = i; j != arr.length; j++){
            cur = 0
            for(let k = 0; k != s.length; k++){

                s[k] += arr[j][k]
                cur += s[k]
                max = Math.max(max,cur)
                cur = cur < 0 ? 0 : cur
            }
        }
    }
    return max
}

let arr = [[-90,48,78],[64,-40,64],[-81,-7,66]]

console.log(maxSum(arr))