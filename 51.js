const fib = (n) => {
    if (n < 1) {
        return 0
    }
    if (n == 1 || n == 2) {
        return 1
    }

    let dp = []
    dp[1] = dp[2] = 1
    for(let i = 3; i <= n; i++){
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
}

const f2 = (n) => {
        if(n < 1){
            return 0
        }
        if(n == 1 || n == 2){
            return 1
        }
        let res = 1
        let pre = 1
        let tmp = 0
        // 每次的结果都是前2个数相加
        for(let i = 3; i <= n; i++){
            tmp = res
            res = res + pre
            pre = tmp
        }
        return res
    }

console.log(fib(15))
console.log(f2(15))