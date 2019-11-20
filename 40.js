function ListNode(val) {
        this.val = val;
        this.next = null;
}

const deleteDup = (head) => {
    if(head == null || head.next == null){
        return head
    }
    let dummy = new ListNode(-1)
    dummy.next = head
    let slow = dummy
    let fast = head

    while(fast != null){
        if(fast.next != null && fast.val != fast.next.val){
            if(slow.next == fast){
                slow = fast
            }else{
                slow.next = fast.next
            }
        }
        fast = fast.next
    }
    return dummy.next
}