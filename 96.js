var letterCombinations = function(digits) {
    if(digits.length == 0) return []
    let abcObj = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }
    let track = []
    let res = []
    // 获取数字对应的字母集
    let abcString = digits.split('').map(item => {
        return abcObj[item].split('')
    })
    backTrack(abcString,track,res,digits,0)
    return res

};

// 这里index表示当前数字 例如传入23  那么我们需要从2开始遍历 方便拿取2对应的abc字母
const backTrack = (abcString,track,res,digits,index) => {
    // 递归终止 存入结果
    if(track.length === digits.length){
        res.push(track.join(''))
        return
    }
    // 递归调用 每次往后延一位 获取对应数字的字母集
    for(let str of abcString[index]){
        track.push(str)
        // 每次压入当前index的一个字母后  index往后延一位 再取一位字母
        backTrack(abcString,track,res,digits,index+1)
        // 回溯 状态还原
        track.pop(str)
    }
}

let res = letterCombinations('23')
console.log(res)