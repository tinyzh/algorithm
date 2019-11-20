const isUnique = (arr) => {
    if(arr == null || arr.length < 1){
        return false
    }
    let temp = []
    for(let i = 0; i < arr.length; i++){
        if(temp[arr[i]]){
            return false
        }
        temp[arr[i]] = true
    }
    return true
}

let arr = ['a','b','c','a']
console.log(isUnique(arr))