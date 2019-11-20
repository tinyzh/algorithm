const removeZero = (str,k) => {
    if(str == null || k < 1){
        return str
    }
    let replaceStr = '0'.repeat(k)
    if(str.indexOf(replaceStr) != -1){
        return str.replace(replaceStr,'')
    }

    return str
}

let str = 'a000b0000'
console.log(removeZero(str,5))