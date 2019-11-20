const isPalindrome = (head) => {
    let temp = []
    let cur = head
    while(cur != null){
        temp.push(cur)
        cur = cur.next
    }
    while(head != null){
        if(head.val != temp.pop().val){
            return false
        }
        head = head.val
    }
    return true
}

const isPalindrome2 = (head) => {
    if(head == null || head.next == null) return true

    let n1 = head
    let n2 = head
    // 查找中间节点 n2每次走两步，当n2走完，n1走到中间位置
    while(n2.next != null && n2.next.next != null){
        n1 = n1.next
        n2 = n2.next.next   
    }

    // n2 -》 右边的第一个节点
    n2 = n1.next 
    // mid.next -> null
    n1.next = null
    let n3 = null

    // 右边开始反转
    while(n2 != null){
        n3 = n2.next
        n2.next = n1
        n1 = n2
        n2 = n3
    }
    n2 = head // n2 -> 左边第一个节点
    // 现在n1 是从右到中间的链表
    // n2 是从head开头
    while(n1 != null && n2 != null){ // 开始检查
        if(n1.val != n2.val){
            return false
        }
        n1 = n1.next // 从左到中间
        n2 = n2.next // 从右到中间
    }

    return true
}