const kill = (head,m) => {
    if(head == null || head.next == head){
        return head
    }
    let last = head
    // 找到最后一个节点
    while(last.next != head){
        last = last.next
    }
    let count = 0
    while(head != last){
        if(++count == m){
            last.next = head.next
            count = 0
        }else{
            last = last.next
        }
        head = last.next
    }
    return head
}