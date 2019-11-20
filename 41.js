
const removeNode = (head,num) => {
    if(head == null) return head
    while(head != null){
        if(head.val != num){
            break
        }
        head = head.next
    }
    let pre = head
    let cur = head
    while(cur != null){
        if(cur.val == num){
            pre.next = cur.next
        }else{
            pre = cur
        }
        cur = cur.next
    }
    return head
}