const calc = (arr) => {
    let row = arr.length
    let col = arr[0].length
    let dp = Array(row).fill([])
    dp = dp.map(item => Array(col).fill(0))

    dp[0][0] = arr[0][0]
    for(let i = 1; i < row; i++){
        dp[i][0] = dp[i-1][0] + arr[i][0]
    }
    for(let i = 1; i < col; i++){
        dp[0][i] = dp[0][i-1] + arr[0][i]
    }
    for(let i = 1; i < row; i++){
        for(let j = 1; j < col; j++){
            dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1]) + arr[i][j]
        }
    }
    return dp[row-1][col-1]
}

let arr = [[1,3,1],
[1,5,1],
[4,2,1]]

console.log(calc(arr))