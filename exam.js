// const arr = [1, [2, [3, [4, 5]]], 6];

// const rest1 = arr.flat(Infinity)
// console.log(rest1)

// const rest2 = arr.toString().split(',').map(item => +item)
// console.log(rest2)


const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}];
// => [1, '1', 17, true, false, 'true', 'a', {}, {}]
// console.log(new Set(arr))
const rest1 = Array.from(new Set(arr))
// console.log(rest1)

// apply
Function.prototype.myApply = function(context = window, args){
    if(typeof this !== 'function'){
        throw new TypeError('Type error')
    }
    const fn = Symbol('fn')
    context[fn] = this
    const res = context[fn](...args)
    delete context[fn]
    return res
}

// call
Function.prototype.myCall = function(context = window, ...args){
    if(typeof this !== 'function'){
        throw new TypeError('type error')
    }
    const fn = Symbol('fn')
    context[fn] = this

    const res = context[fn](...args)
    delete context[fn]
    return res
}

// bind
Function.prototype.myBind = function(context, ...args){
    if(typeof this !== 'function'){
        throw new Error('Type error')
    }

    // 保存this
    var self = this

    return function F(){
        // 考虑new 情况
        if(this instanceof F){
            return new self(...args, ...arguments)
        }
        return self.apply(context, [...args,...arguments])
    }
}

// 函数珂里化
function add(){
    const _args = [...arguments]
    function fn(){
        _args.push(...arguments)
        return fn
    }
    fn.toString = function(){
        return _args.reduce((sum,cur) => cum + cur)
    }
    return fn
}
console.log(add(1)(2)(3)(4))