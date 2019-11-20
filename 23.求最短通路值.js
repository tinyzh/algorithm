
const minPathValue = (m) => {
    if (m == null || m.length == 0 || m[0].length == 0 || m[0][0] != 1
        || m[m.length - 1][m[0].length - 1] != 1) {
        return 0
    }
    let res = 0
    let temp = Array(m.length).fill([])
    let map = temp.map(item => new Array(m[0].length).fill(0))
    map[0][0] = 1
    let rQ = []
    let cQ = []
    rQ.push(0)
    cQ.push(0)
    let r = 0
    let c = 0
    while (rQ.length != 0) {
        r = rQ.shift()
        c = cQ.shift()
        if (r == m.length - 1 && c == m[0].length - 1) {
            // 说明走到最后一个位置了
            return map[r][c]
        }
        walkTo(map[r][c], r - 1, c, m, map, rQ, cQ); // up
        walkTo(map[r][c], r + 1, c, m, map, rQ, cQ); // down
        walkTo(map[r][c], r, c - 1, m, map, rQ, cQ); // left
        walkTo(map[r][c], r, c + 1, m, map, rQ, cQ); // right
    }
    console.log('end')
    return res
}

const walkTo = (pre, toR, toC, m, map, rQ, cQ) => {
    // 此位置不存在或者此位置的值为0 都说明这个位置不能走
    if (toR < 0 || toR == m.length || toC < 0 || toC == m[0].length
        || m[toR][toC] != 1 || map[toR][toC] != 0) {
        return
    }
    // 下一个点在当前点的基础上加一
    map[toR][toC] = pre + 1
    console.log(map)

    // 此位置能继续走，就推入队列 下次遍历的时候又开始计算
    rQ.push(toR)
    cQ.push(toC)
}

let arr = [
    [1, 1, 1, 1, 1], 
    [1, 0, 1, 0, 1], 
    [1, 1, 1, 0, 1], 
    [1, 1, 1, 0, 1]
]

console.log(minPathValue(arr))