/* 
1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0
 */

const maximal = (matrix) => {
    if(matrix.length == 0 || matrix[0].length == 0) return 0
    let rows = matrix.length
    let col = matrix[0].length
    const dp = new Array(rows + 1)
    for (let i = 0; i < dp.length; i++){
        dp[i] = new Array(col + 1).fill(0)
    }
    let maxsqlen = 0
    for(let i = 1; i <= rows; i++){
        for(let j = 1; j <= col; j++){
            if(matrix[i-1][j-1] == 1){
                dp[i][j] = Math.min(Math.min(dp[i][j - 1], dp[i - 1][j]), dp[i - 1][j - 1]) + 1;
                maxsqlen = Math.max(maxsqlen, dp[i][j]);
            }
        }
    }
    return maxsqlen * maxsqlen
}

let arr = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
console.log(maximal(arr))
