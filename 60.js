/**
 * 
1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0
 */

const maximal = (matrix) => {
    let rows = matrix.length
    let cols = matrix[0].length
    let maxSqlen = 0
    // 遍历行
    for(let i = 0; i < rows; i++){
        // 遍历列
        for(let j = 0; j < cols; j++){
            // 如果当前元素为1
            if(matrix[i][j] == 1){
                // 如果当前点为1 我们就查找接下来边长为1的矩阵 也就是包含当前点 边长为2的矩阵
                let sqlen = 1
                let flag = true
                // 找以当前点为左上角 边长为剩余row和col的矩阵 如果发现0 就排除这个点
                while(sqlen + i < rows && sqlen + j < cols && flag){
                    // 遍历边长为sqlen的矩阵 如果发现0 就说明当前这个点可以放弃 flag为false 边长不会增加
                    // 这里遍历的是i+sqlen行 边长为sqlen+i 的矩阵
                    for(let k = j; k <= sqlen+j;k++){
                        if(matrix[i + sqlen][k] == 0){
                            flag = false
                            break
                        }
                    }
                    // 这里遍历的是j+sqlen列 边长为sqlen+j的矩阵
                    for(let k = i; k <= sqlen+i; k++){
                        if(matrix[k][sqlen+j] == 0){
                            flag = false
                            break
                        }
                    }
                    // 如果在上面的行和列中间都没有发现0 说明边长为sqlen的矩阵 是满足条件的 
                    // 然后我们就让边长增加1 然后继续遍历
                    if(flag){
                        sqlen++
                    }
                }
                // 在当前点 遍历完后 得到最大的边长
                if(maxSqlen < sqlen){
                    maxSqlen = sqlen
                }
            }
        }
    }
    return maxSqlen * maxSqlen
}


