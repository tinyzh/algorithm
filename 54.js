let arr = [5,2,3]
let aim = 20

// let dp[i][j] = min(dp[i-1][j-k*arr[i]] + k(0 <= k))

let minCoins = (arr,aim) => {
    if(arr == null || arr.length == 0 || aim < 0){
        return -1
    }
    let n = arr.length
    let max = Number.MAX_SAFE_INTEGER
    let dp = Array(n).fill(Array(aim+1))
    for(let j = 1; j <= aim; j++){
        dp[0][j] = max
        if(j - arr[0] >= 0 && dp[0][j-arr[0]] != max){
            dp[0][j] = dp[0][j - arr[0]] + 1
        }
    }
    let left = 0
    for(let i = 1; i < n; i++){
        for(let j = 1; j <= aim; j++){
            left = max
            if(j - arr[i] >= 0 && dp[i][j - arr[i]] != max){
                left = dp[i][j - arr[i]] + 1
            }
            dp[i][j] = Math.min(left,dp[i-1][j])
        }
    }
    return dp[n-1][aim] != max ? dp[n-1][aim] : -1
}