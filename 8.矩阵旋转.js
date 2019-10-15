
let rotate = (matrix) => {
    if(!matrix.length) return []

    let tR = 0
    let tC = 0

    let dR = matrix.length - 1
    let dC = matrix[0].length - 1

    while(tR < dR){
        rotateEdge(matrix,tR++,tC++,dR--,dC--)
    }
    return matrix
}

let rotateEdge = (m,tR,tC,dR,dC) => {
    let times = dC - tC  // 总共要走几轮
    let tmp = 0
    for(let i = 0; i != times; i++){ // 一次循环就是一组占据调整
        tmp = m[tR][tC+i] // 保存开始点
        m[tR][tC+i] = m[dR-i][tC]
        m[dR - i][tC] = m[dR][dC-i]
        m[dR][dC - i] = m[tR + i][dC]
        m[tR + i][dC] = tmp
    }
}

let arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
console.log(rotate(arr))