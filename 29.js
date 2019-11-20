const getCount = (str) => {
    if(str == null){
        return
    }
    let cur = ''
    let res = ''
    for(let i = 0; i < str.length; i++){
        if(cur.indexOf(str[i]) == -1){
            if(cur){
                res += '_' + cur[0] + '_' + cur.length
            }
            cur = str[i]
        }else{
            cur += str[i]
        }
    }
    return res + '_' + cur[0] + '_' + cur.length
}

let str = 'aaabbadddffcc'

console.log(getCount(str))