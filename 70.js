const minDepth = (root) => {
    if(root == null){
        return 0
    }
    // 如果左右都为空，说明到达了叶子节点 返回1
    if(root.left == null && root.right == null) return 1

    // 如果左和右其中一个为空，那么要返回比较大的叶子节点的深度
    let m1 = minDepth(root.left)
    let m2 = minDepth(root.right)
    if(root.left == null || root.right == null) return m1 + m2 + 1

    // 最后的情况，左右都不为空，返回最小深度+1
    return Math.min(m1,m2) + 1
}