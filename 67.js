const treeNode = (t1,t2) => {
    if(t1 == null){
        return t2
    }
    if(t2 == null){
        return t1
    }
    t1.val += t2.val
    t1.left = treeNode(t1.left,t2.left)
    t1.right = treeNode(t1.right,t2.right)
    return t1
}