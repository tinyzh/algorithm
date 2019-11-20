const compare = (str1,str2) => {
    if(str1 == null || str2 == null || str1.length != str2.length){
        return false
    }
    let arr1 = str1.split('')
    let arr2 = str2.split('')
    let map = Array(256).fill(0)
    for(let i = 0; i < arr1.length; i++){
        map[arr1[i]]++
    }
    for(let i = 0; i < arr2.length; i++){
        if(map[arr2[i]]-- == 0){ // 如果当前的数是0 那就说明这个值在str1里面不存在
            return false
        }
    }
    return true
}

let str1 = '123'
let str2 = '2331'

console.log(compare(str1,str2))