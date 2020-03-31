// let num = 0
// const calc = (s) => {
//     for(let i = 0; i < s.length; i++){
//         count(s,i,i) // 回文长度为奇数
//         count(s,i,i+1) // 回文长度为偶数
//     }
//     return num
// }

// const count = (s,start,end) => {
//     while(start >= 0 && end < s.length && s[start] == s[end]){
//         num++
//         start--
//         end++
//     }
// }


// const cc = (str) => {
//     if(!str.length) return 0
//     let length = str.length
//     let count = 0
//     for(let start = 0; start < length; start++){
//         for(let end = start; end < length; end++){
//             let temp = str.slice(start,end+1)
//             if(checkStr(temp)){
//                 count++
//             }
//         }
//     }
//     return count
// }

// const checkStr = (str) => {
//     let start = 0
//     let end = str.length - 1
//     while(start <= end){
//         if(str[start] != str[end]){
//             return false
//         }
//         start++
//         end--
//     }
//     return true
// }

// console.log(cc('abc'))