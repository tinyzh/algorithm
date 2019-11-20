function ListNode(val) {
        this.val = val;
        this.next = null;
}

const selectionNode = (head) => {
    let tail = null // 排序部分尾部
    let cur = head // 未排序部分头部
    let smallPre = null // 最小节点的前一个节点
    let small = null // 最小的节点

    while(cur != null){
        small = cur
        smallpre = getSmallPreNode(cur)
        if(smallPre != null){
            small = smallPre.next
            smallPre.next = small.next
        }
        cur = cur == small ? cur.next : cur
        if(tail == null){
            head = small
        }else{
            tail.next = small
        }
        tail = small
    }
    return head
}



// 找到链表中的最小节点的前一个节点
const getSmallPreNode = (head) => {
    let smallPre = null // 最小节点的前一个节点
    let small = head // 最小节点
    let pre = head  // 前一个节点
    let cur = head.next  // 当前节点

    while(cur != null){
        if(cur.val < small.val){
            smallPre = pre
            small = cur
        }
        pre = cur
        cur = cur.next
    }
    return smallPre
}