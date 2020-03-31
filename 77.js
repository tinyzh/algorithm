var binaryTreePaths = function(root) {
    let res = []

    // 如果当前节点为空 直接返回
    if(root == null){
        return res
    }

    // 如果当前为叶子节点，那么就把当前的值推入到结果中
    if(root.left == null && root.right == null){
        res.push(root.val)
        return res
    }

    // 求当前节点的左子树
    let left = binaryTreePaths(root.left)
    left.map((item,index) => {
        res.push(root.val + '->' + item)
    })

    // 当前节点的右子树
    let right = binaryTreePaths(root.right)
    right.map((item,index) => {
        res.push(root.val + '->' + item)
    })

    // 返回
    return res
};