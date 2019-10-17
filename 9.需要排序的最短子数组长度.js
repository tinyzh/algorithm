let getMinLength = (arr) => {
    if(arr === null || arr.length < 2) return 0

    let min = arr[arr.length - 1]
    let noMinIndex = -1
    for(let i = arr.length - 2; i >= 0; i--){
        if(arr[i] > min){ // 当前数大于最小值，说明需要换位置，记录这个索引 
            
            noMinIndex = i
        }else{
            // 如果当前数小于最小值，那么当前数就替换为最小值
            min = Math.min(min,arr[i])
        }
    }
    // 没变化 原数组不用重新排序
    if(noMinIndex == -1){
        return 0
    }

    let max = arr[0]
    let noMaxIndex = -1
    for(let i = 1; i != arr.length; i++){
        if(arr[i] < max){
            noMaxIndex = i
        }else{
            max = Math.max(max,arr[i])
        }
    }
    console.log(noMinIndex,noMaxIndex)
    return noMaxIndex - noMinIndex + 1
}

let arr = [1,5,3,4,2,6,7]
getMinLength(arr)