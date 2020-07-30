const hasCycle = (head) => {
    let fast = slow = head
    while(fast != null && fast.next != null){
        fast = fast.next.next
        slow = slow.next
        if(fast == slow){
            return true
        }
    }
    return false
}

const detectCycle = (head) => {
    let fast = slow = head
    while(fast != null && fast.next != null){
        fast = fast.next.next
        slow = slow.next
        if(fast == slow) break
    }

    slow = head
    while(fast != slow){
        fast = fast.next
        slow = slow.next
    }
    return slow
}