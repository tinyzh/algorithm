const pro1 = (arr) => {
    if(arr == null || arr.length < 2){
        return null
    }
    // 统计出现0的次数
    let count = 0
    let all = 1
    let res = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != 0){
            all *= arr[i]
        }else{
            count++
        }
    }

    if(count == 0){
        res = arr.map(item => all/item)
    }
    if(count == 1){
        for(let i = 0; i != arr.length; i++){
            if(arr[i] == 0){
                res[i] = all
            }
        }
    }
    return res
}
let arr = [2,3,1,4]

console.log(pro1(arr))