// const errorMessage = {
//     400: '错误请求',
//     401: '系统未授权，请重新登录',
//     403: '拒绝访问',
//     404: '请求失败，未找到该资源'
// }

// const proxy = new Proxy(errorMessage,{
//     get(target,key){
//         const value = target[key]
//         return value || '系统异常'
//     }
// })

// console.log(proxy[450])

const numbers = []
const proxy = new Proxy(numbers,{
    set(target,key,value){
        if(value < 0){
            value = 0
        }else if(value > 100){
            value = 100
        }
        target[key] = value
        return true
    }
})

proxy.push(1)
proxy.push(1055)
proxy.push(-5)
console.log(proxy)