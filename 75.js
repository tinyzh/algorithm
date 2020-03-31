const isBalance = (head) => {
    let res = []
    res[0] = true
    getHeight(head,1,res)
    return res[0]
}

const getHeight = (head,level,res) => {
    if(head == null){
        return level
    }
    let lh = getHeight(head.left,level+1,res)
    if(!res[0]){
        return level
    }

    let rh = getHeight(head.right,level+1,res)
    if(!res[0]){
        return level
    }
    if(Math.abs(lh-rh) > 1){
        res[0] = false
    }
    return Math.max(lh,rh)
}