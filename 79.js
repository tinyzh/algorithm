// function f(index){
//     var b = []
    
//     for(var i = 0; i < 10; i++){
//         b[i] = () => {
//             return i * index
//         }
//     }
//     return b[index]()
// }

// let num = f(6)

// // console.log(num)

// let ar = Array(5)

// ar.map(item => {
//     console.log('in')
// })

let str = '2019122305'
let pat = /(\d{4})(\d{2})(\d{2})/g

let res = str.replace(pat,(match,$0,$1,$2) => {
    console.log(match)
    return $0 + '-' + $1 + '-' + $2
})
console.log(res)