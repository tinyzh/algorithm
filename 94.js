function coinChange(coins, amount) { 
    
    if(amount === 0) return 0
    let min = Infinity
    // 遍历硬币数组
    for(let coin of coins){
        // 如果总额小于当前硬币 就说明当前硬币无法使用 跳过
        if(amount < coin) continue
        // 然后递归 减去当前硬币
        let tmp = coinChange(coins, amount - coin)
        
        if(tmp === -1) continue
        // 
        min = Math.min(min, tmp + 1)
    }
    // 如果当前总额误解 就返回-1
    return Number.isFinite(min) ? min : -1
}


/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let arr = new Array(amount+1).fill(-2);
    return help(coins, amount, arr);
};

function help(coins, amount, arr) {
    if (amount <= 0) return 0;
    if (arr[amount] !== -2) return arr[amount];
    let min = Infinity;
    for (let coin of coins) {
        if (amount < coin) continue;
        let tmp = help(coins, amount-coin, arr);
        if (tmp === -1) continue;
        min = Math.min(min, tmp+1);
    }
    arr[amount] = Number.isFinite(min) ? min : -1;
    return arr[amount];
}


/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount+1).fill(amount+1)
    dp[0] = 0
    for(let i = 1; i <= amount; i++){
        for(let coin of coins){
            if(coin <= i){
                dp[i] = Math.min(dp[i],dp[i-coin]+1)
            }
        }
    }
    
    return dp[amount] > amount ? -1 : dp[amount]
};