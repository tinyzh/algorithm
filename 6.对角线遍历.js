// https://leetcode-cn.com/explore/learn/card/array-and-string/199/introduction-to-2d-array/774/

// 1.先分两个坐标点，同步运动  一个沿着x轴，一个沿着y轴
// 2.x轴(tR,tC) 初始(0,0) 沿着矩阵第一行移动tC++(也就是列先增加) 当运动到最后的元素后，再沿着矩阵最后一列移动tR++
// 3.y轴也是一样(dR,dC) 初始(0,0) dr++(这里是行先增加)  到底后 dc++
// 4.然后再把这两个点的左边连起来，之间斜线上的元素就是我们需要的
// 5.然后方向每次移动之后就取反


const findDiagonalOrder = function(matrix) {
    let tR = 0
    let tC = 0

    let dR = 0
    let dC = 0

    let endR = matrix.length - 1   // m 行
    let endC = matrix[0].length - 1   // n  列
    // 方向
    let fromUp = false
    let res = []
    while(tR != endR + 1){
        format(matrix,tR,tC,dR,dC,fromUp,res)
        // 先是列增加，到底后行在加   
        tR = tC === endC ? tR + 1 : tR
        tC = tC === endC ? tC : tC + 1

        // 这里是先行增加，然后列再增加
        dC = dR === endR ? dC + 1 : dC
        dR = dR === endR ? dR : dR + 1
        // 方向取反
        fromUp = !fromUp
    }
    return res
}

const format = (matrix,tR,tC,dR,dC,fromUp,res) => {
    
    if(fromUp){
        // console.log(tR,tC,dR,dC)
        while(tR != dR + 1){
            res.push(matrix[tR++][tC--])  // 然后每次行增加，列减少 就形成一个往左下方向的运动轨迹
        }
    }else{
        while(dR != tR - 1){
            res.push(matrix[dR--][dC++])  // 这里行减少，列增加，就形成往右上的轨迹
        }
    }
}

let arr = [[1,2,3],[4,5,6],[7,8,9]]

findDiagonalOrder(arr)