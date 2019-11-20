function ListNode(val) {
        this.val = val;
        this.next = null;
    }

const addList = (head1, head2) => {
    let s1 = []
    let s2 = []
    while(head1 != null){
        s1.push(head1.val)
        head1 = head1.next
    }
    while(head2 != null){
        s2.push(head2.val)
        head2 = head2.next
    }
    let ca = 0
    let n1 = 0
    let n2 = 0
    let n = 0
    let node = null
    let pre = null
    while(!!s1.length || s2.length){
        n1 = s1.length ? s1.pop() : 0
        n2 = s2.length ? s2.pop() : 0
        n = n1 + n2 + ca
        pre = node
        node = new ListNode(n % 10)
        node.next = pre
        ca = Math.floor(n / 10)
    }
    if(ca == 1){
        pre = node
        node = new ListNode(1)
        node.next = pre
    }
    return node
}