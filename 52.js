/**
 * 1 3 5 9
 * 8 1 3 4
 * 5 0 6 1
 * 8 8 4 0
 */

const minPathSum1 = (m) => {
    if (m == null || m.length == 0 || m[0] == null || m[0].length == 0) {
        return 0
    }

    let row = m.length
    let col = m[0].length
    let dp = Array(row).fill([])
    dp = dp.map(item => Array(col).fill(0))
    dp[0][0] = m[0][0]

    // 求出第一列的结果
    for (let i = 1; i < row; i++) {
        dp[i][0] = dp[i - 1][0] + m[i][0]
    }

    // 求出第一行的结果
    for (let j = 1; j < col; j++) {
        dp[0][j] = dp[0][j - 1] + m[0][j]
    }

    // 计算得出每一个位置的值
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            dp[i][j] = Math.min(dp[i - 1][j],dp[i][j - 1]) + m[i][j]
        }
    }
    // 取最后一个位置的值 即为结果
    return dp[row - 1][col - 1]

}

let arr = [[1, 3, 1], [1, 5, 1], [4, 2, 1]]

minPathSum1(arr)

const minPathSum2 = (m) => {
    if (m == null || m.length == 0 || m[0] == null || m[0].length == 0) {
        return 0
    }
    let row = m.length
    let col = m[0].length
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(i== 0 && j == 0){
                continue
            }else if(i == 0){
                // 第一行 只能是从左边来，不可能从上面来
                m[i][j] = m[i][j-1] + m[i][j]
            }else if(j == 0){
                // 第一列 只能从上面来，不可能从左边来
                m[i][j] = m[i-1][j] + m[i][j]
            }else{
                m[i][j] = Math.min(m[i-1][j],m[i][j-1]) + m[i][j]
            }
        }
    }
    return m[row-1][col-1]

}