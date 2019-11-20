function ListNode(val) {
    this.val = val;
    this.next = null;
}

const removeNode = (node) => {
    if(node == null){
        return
    }

    let next = node.next
    if(next == null){
        // 说明当前要删除的是最后一个节点
        throw new Error('不能删除最后一个节点')
    }
    node.val = next.val
    node.next = next.next
}