const invertTree = (root) => {
    if(root == null) return null

    // 交换左右节点
    let temp = root.left
    root.left = root.right
    root.right = temp

    // 继续遍历
    invertTree(root.left)
    invertTree(root.right)

    return root
}
