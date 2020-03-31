const maxDepth = (root) => {
    if(root == null){
        return 0
    }

    let left = maxDepth(root.left)
    let right = maxDepth(right)
    return Math.max(left,right) + 1
}