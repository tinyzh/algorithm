function ListNode(val) {
    this.val = val;
    this.next = null;
}

const insertNum = (head, num) => {
    let node = new ListNode(num)
    if(head == null){
        node.next = node
        return node
    }
    let pre = head
    let cur = head.next
    while(cur != head){
        if(pre.val <= num && cur.val >= num){
            break
        }
        pre = cur
        cur = cur.next
    }
    pre.next = node
    node.next = cur
    return head.val < num ? head : node
}