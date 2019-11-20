let res = new Array(8)
for(let i = 0; i < 8; i++){
    res[i] = i
}

const cal8queens = (row) => {
    if(row == 8){
        console.log(res)
        // printQuees(res)
        return
    }
    // 每一行都有8种放法
    for(let column = 0; column < 8; column++){
        if(isOk(row,column)){
            // 第row行的棋子放到了column列
            res[row] = column
            // 考察下一行
            cal8queens(row+1)
        }
    }
}

const isOk = (row,column) => {
    let leftUp = column - 1
    let rightUp = column + 1
    for(let i = row-1; i >= 0; i--){
        if(res[i] == column) return false
        if(leftUp >= 0){
            if(res[i] == leftUp) return false
        }
        if(rightUp < 8){
            if(res[i] == rightUp) return false
        }
        --leftUp
        ++rightUp
    }
    return true
}

const printQuees = (res) => {
    for(let row = 0; row < 8; row++){
        for(let column = 0; column < 8; column++){
            if(res[row] == column){
                console.log('Q ')
            }else{
                console.log('* ')
            }

        }
    }
}

cal8queens(0)