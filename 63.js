let str = 'abcabcbbde'
// let str = 'bbbbbb'

const calc = (str) => {
    if(str == null || str.length == 0){
        return
    }
    let res = ''
    let temp = []
    for(let i = 0; i < str.length;i++){
        for(let j = i;j<str.length;j++){
            if(temp.indexOf(str[j]) > -1){
                temp = []
                break
            }
            temp.push(str[j])
            if(temp.length > res.length){
                res = temp.join('')
            }
        }
    }
    return res
}

console.log(calc(str))