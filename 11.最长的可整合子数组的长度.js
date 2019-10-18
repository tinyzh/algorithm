let arr = [5,5,3,2,6,4,3]

// 暴力法
let getLen = (arr) => {
    if(arr === null || arr.length === 0) return 0
    let len = 0
    let length = arr.length
    for(let i = 0; i < length; i++){
        for(let j = i; j < length; j++){
            if(isIntegrated(arr,i,j)){
                len = Math.max(len, j - i + 1)
            }
        }
    }
    return len
}

const isIntegrated = (arr,left,right) => {
    let newArr = arr.slice(left,right+1)
    newArr.sort((a,b) => a - b)
    for(let i = 1; i < newArr.length; i++){
        if(newArr[i-1] != newArr[i] - 1){
            return false
        }
    }
    return true
}

// console.log(getLen(arr))



const getLeg2 = (arr) => {
    if(arr === null || arr.length === 0) return 0
    let len = 0
    let max = 0
    let min = 0
    let temp = new Set([]) // 使用set结构去重

    for(let i = 0; i < arr.length; i++){
        min = arr[i]
        for(let j = i; j < arr.length; j++){
            if(temp.has(arr[j])){
                break
            }
            temp.add(arr[j])
            max = Math.max(max,arr[j])
            min = Math.min(min,arr[j])
            if(max-min == j - i){
                len = Math.max(len,j - i + 1)
            }
        }
        console.log(max,min)
        temp.clear()
    }
    return len
}

console.log(getLeg2(arr))