const s2 = (n) => {
    if(n < 1){
        return 0
    }
    if(n == 1 || n == 2){
        return n
    }

    let res = 2
    let pre = 1
    let temp = 0
    for(let i = 3; i <= n; i++){
        temp = res
        res = res + pre
        pre = temp
    }
    return res
}