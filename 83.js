let maximal = (matrix) => {
    let rows = matrix.length
    let cols = matrix[0].length
    let maxRowLen = 0
    let maxColLen = 0

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] == 1) {
                let rowsLen = 1
                let colsLen = 1
                let rowsflag = true
                let colsflag = true
                // 当前点为左顶点
                while (rowsLen + i < rows && colsLen + j < cols && rowsflag && colsflag) {

                    // 遍历列边长 看是否有0
                    for (let k = j; k <= colsLen + j; k++) {
                        if (matrix[i + colsLen][k] == 0) {
                            colsflag = false
                            break
                        }
                    }
                    if (colsflag) {
                        colsLen++
                    }

                    for (let k = i; k <= rowsLen + i; k++) {
                        if (matrix[k][rowsLen + j] == 0) {
                            rowsflag = false
                            break
                        }
                    }

                    if(rowsflag){
                        rowsLen++
                    }

                }
                maxRowLen = Math.max(maxColLen,rowsLen)
                maxColLen = Math.max(maxColLen,colsLen)
            }
        }
    }

    return maxRowLen * maxColLen

}