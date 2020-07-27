const minDepth = (root) => {
    if(root == null) return 0
    // 数据队列
    let q = []
    // 将起点加入队列
    q.push(root)
    // 记录步数
    let depth = 1
    
    while(q.length){
        let len = q.length
        // 将当前队列中的所有节点像四周或者向下扩散
        for(let i =0; i < len; i++){
            // 取到当前节点
            let cur = q.shift()
            // 终止条件 
            // 因为这里都是平行进行判断 如果左右都为空 说明到达最短子节点
            if(cur.left == null && cur.right == null){
                return depth
            }
            // 将cur的相邻节点加入队列
            if(cur.left != null){
                q.push(cur.left)
            }
            if(cur.right != null){
                q.push(cur.right)
            }
        }
        // 如果在当层节点都不满足退出条件，步数要增加 然后往下一层走
        depth+=1
    }
    return depth
}