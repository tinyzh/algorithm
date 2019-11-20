const removeListNode = (head,n) => {
    let cur = head
    while(cur !=null){
        n--
        cur = cur.next
    }
    if(n == 0){
        return head.next
    }
    if(n < 0){
        cur = head
        while(++n != 0){
            cur = cur.next
        }
        cur.next = cur.next.next
    }
    return head
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const removeNode = (head,n) => {
    let pre = new ListNode(0)
    pre.next = head
    let start = pre,end = pre

    while(n != 0){
        start = start.next
        n--
    }
    while(start.next != null){
        start = start.next
        end = end.next
    }
    end.next = end.next.next
    return pre.next
}