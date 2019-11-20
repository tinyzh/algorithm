/*
    weight 物品重量   {2,2,4,6,3}
    n 物品个数    5
    w 背包可承载重量       9
*/
const packet = (weight, n, w) => {
    // 初始化
    let states = Array(n).fill(Array(w+1).fill(false))
    // 第一层数据特殊处理
    states[0][0] = true
    if(weight[0] < w){
        states[0][weight[0]] = true
    }
    // 从第二层开始做状态记录
    for(let i = 1; i < n; ++i){
        for(let j = 0; j <= w; ++j){
            // 如果上一层的当前位置已经有状态了 我们就直接使用上一层的状态
            if(states[i - 1][j] == true){
                states[i][j] = states[i-1][j]
            }
        }
        // 把第i个物品放入背包
        for(let j = 0; j <= w-weight[i]; ++j){
            if(states[i-1][j] == true){
                states[i][j+weight[i]] = true
            }
        }
    }
    console.log(states)
    for(let i = w; i >= 0; --i){
        // 最后一行 找到最大值 i对应重量
        if(states[n-1][i] == true) return i
    }
    return 0
}

let weight = [2,2,4,6,3]
let n = 5
let w = 9

console.log(packet(weight,n,w))