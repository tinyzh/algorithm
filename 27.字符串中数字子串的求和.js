const numSum = (str) => {
    if(str == null) return 0

    let strArr = str.split('')
    let res = 0
    let num = 0
    let posi = true
    for(let i = 0; i < strArr.length; i++){
        if(!/\d/.test(strArr[i])){ // 不是数字
            // 在非数字的情况下进行运算
            res += num
            num = 0 // 运算完后，num清空，当下次出现数字的时候重新赋值

            if(strArr[i] == '-'){ // 如果当前元素是'-'
                // 当前元素不是第一个元素&当前元素的前一个也是'-'
                // 说明这里出现了2个‘-’ 
                if(i - 1 > -1 && strArr[i - 1] == '-'){
                    posi = !posi
                }else{
                    posi = false
                }
            }else{
                // 其它的情况 重置posi
                posi = true
            }
            
        }else{
            // 是数字的情况
            num = num * 10 + (posi ? +strArr[i] : -strArr[i])
        }
    }
    res += num
    return res
}

// let str = 'a1cd2e33-44'
let str = 'a-1b--2c--d6e'

console.log(numSum(str))