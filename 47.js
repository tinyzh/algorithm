const half = (arr) => {
    let cand = 0
    let times = 0
    for(let i = 0; i < arr.length; i++){
        if(times == 0){
            cand = arr[i]
            times = 1
        }else if(arr[i] == cand){
            times++
        }else{
            times--
        }
    }
    // 如果可以保证一定有众数，这里就可以返回cand了

    // 下面的情况时没法保证出现众数 例如  1 2 3
    // 计算候选数出现的次数
    times = 0
    for(let i = 0; i != arr.length; i++){
        if(arr[i] == cand){
            times++
        }
    }
    // 如果大于一半，就可以返回
    if(times > arr.length/2){
        return cand
    }else{
        console.log('没有找到')
    }
}