var intervalIntersection = function(A, B) {
    let i = 0
    let j = 0
    let res = []

    while(i < A.length && j < B.length){
        let a1 = A[i][0]
        let a2 = A[i][1]
        let b1 = B[j][0]
        let b2 = B[j][1]
        // 如果两个区间存在交集
        if(b2 >= a1 && a2 >= b1){
            res.push([Math.max(a1,b1),Math.min(a2,b2)])
        }
        if(b2 < a2){
            j+=1
        }else{
            i+=1
        }
    }

    return res
};