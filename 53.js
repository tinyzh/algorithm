let memo = []
let times = 1
let n = 50
const helper = (memo,n) => {
    if(n == 1 || n == 2) return 1
    if(!!memo[n]) return memo[n]
    memo[n] = helper(memo,n-1) + helper(memo,n-2)
    return memo[n]
}
console.log(helper(memo,n))

const dg = (n) => {
    times++
    if(n == 1 || n == 2) return 1
    return dg(n-1) + dg(n-2)
}

console.log(dg(n))
console.log(times,'times')




const gold = (n) => {
    if (n == 1 || n == 2) return 1
    let temp = []
    temp[1] = temp[2] = 1
    for (let i = 3; i <= n; i++) {
        temp[i] = temp[i - 1] + temp[i - 2]
    }
    return temp[n]

}

console.log(gold(n))

const fib = (n) => {
    if (n < 1) {
        return 0
    }
    if (n == 1 || n == 2) {
        return 1
    }
    let dp = []
    dp[1] = dp[2] = 1
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
}

console.log(fib(n))