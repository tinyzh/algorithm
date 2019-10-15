// https://leetcode-cn.com/explore/learn/card/array-and-string/199/introduction-to-2d-array/775/



let arr = [[1,2,3],[4,5,6],[7,8,9]]
let spiralOrder = function (matrix) {
    if (!matrix.length) return []
    // 左上角
    let tR = 0
    let tC = 0

    // 右下角
    let dR = matrix.length - 1
    let dC = matrix[0].length - 1
    
    let res = []
    while (tR <= dR && tC <= dC) {
        format(matrix, tR++, tC++, dR--, dC--, res)
    }
    return res
};

let format = (matrix, tR, tC, dR, dC, res) => {
    if (tR == dR) { // 只有一行
        for (let i = tC; i <= dC; i++) {
            res.push(matrix[tR][i])
        }
    }else if (tC == dC) { // 只有一列
        for(let i = tR; i <= dR; i++){
            res.push(matrix[i][tC])
        }    
    }else{ // 一般情况
        let curC = tC
        let curR = tR
        
        while(curC != dC){
            res.push(matrix[tR][curC])
            curC++
        }
        while(curR != dR){
            res.push(matrix[curR][dC])
            curR++
        }
        while(curC != tC){
            res.push(matrix[dR][curC])
            curC--
        }
        while(curR != tR){
            res.push(matrix[curR][tC])
            curR--
        }
    }
}

let f = spiralOrder(arr)
console.log(f)