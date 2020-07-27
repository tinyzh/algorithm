// 将pwd[j]向上拨动一次
const plusOne = (pwd,j) => {
    let ch = pwd.split('')
    if(ch[j] == 9){
        ch[j] = 0
    }else{
        ch[j] = 1 + +ch[j]
    }
    return ch.join('')
}

// 将pwd[j]向下拨动一次
const minusOne = (pwd,j) => {
    let ch = pwd.split('')
    if(ch[j] == 0){
        ch[j] = 9
    }else{
        ch[j] = +ch[j] - 1
    }
    return ch.join('')
}

const openLock = (deadends,target) => {
    if(target==null || target=="0000") return -1
    // 记录已经穷举过的密码，防止走回头路
    let start = "0000"
    if(deadends.includes(target)||deadends.includes(start)) return -1
    // 这里不能用数组  会超时
    let visited = new Set()
    let q = []
    // 从起点开始启动广度优先搜索
    let step = 0
    q.push(start)
    visited.add(start)

    while(q.length){
        let sz = q.length
        // 将当前队列中的所有节点向周围扩散
        for(let i = 0; i < sz; i++){
            let cur = q.shift()
            // 判断是否到达终点 和target匹配
            if(deadends.includes(cur)){
                continue
            }
            if(cur == target){
                return step
            }

            // 将一个节点的未遍历相邻节点加入队列
            for(let j = 0; j < 4; j++){
                let up = plusOne(cur,j)
                if(!visited.has(up)){
                    q.push(up)
                    visited.add(up)
                }
                let down = minusOne(cur,j)
                if(!visited.has(down)){
                    q.push(down)
                    visited.add(down)
                }
            }
        }
        step++
    }
    return -1
}

console.log(plusOne("0000",2))