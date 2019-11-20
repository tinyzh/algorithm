function ListNode(val) {
        this.val = val;
        this.next = null;
}

const removeRep = (head) => {
    if(head == null){
        return
    }
    let set = []
    let pre = head
    let cur = head.next
    set.push(head.val)
    while(cur != null){
        if(set.indexOf(cur.val) != -1){
            pre.next = cur.next
        }else{
            set.push(cur.val)
            pre = cur
        }
        cur = cur.next
    }
    return head
}