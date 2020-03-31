const hasPath = (root,sum) => {
    if(root == null){
        return false
    }
    sum -= root.val
    if(root.left == null && root.right == null){
        return sum == 0
    }
    return hasPath(root.left,sum) || hasPath(root.right,sum)
}