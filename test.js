// const tags = document.getElementsByTagName('*')
// const value = [...tags].filter(itme => itme.tagName.startsWith('B'))

// const tags = document.getElementsByTagName('*')
// const map = new Map()
// const max = 0
// const maxTag = ''
// for(let i = 0; i < tags.length; i++){
//     let value = map.get(tags[i].tagName)
//     if(value){
//         map.set(tags[i].tagName,++value)
//     }else{
//         map.set(tags[i].tagName, 1)
//     }
//     if(value > max){
//         maxTag = tags[i].tagName
//         max = value
//     }
// }

// function quickSort(arr){
//     if(arr.length <= 1) return arr
//     let midIndex = Math.floor(arr.length / 2)
//     let mid = arr.splice(midIndex,1)[0]
//     let left = []
//     let right = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < mid){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return quickSort(left).concat([mid],quickSort(right))
// }

function sleep(wait){
    return new Promise(resolve => setTimeout(resolve,wait))
}
sleep(5000).then(() => {
    console.log(123)
})

(async function() {
    console.log('Do some thing, ' + new Date());
    await sleep(3000);
    console.log('Do other things, ' + new Date());
})();

function curring(fn, ...args){
    if(fn.length === args.length){
        return fn(...args)
    }else{
        return function ano(...newArgs){
            let allArgs = [...args,...newArgs]
            return curring(fn, ...allArgs)
        }
    }
}

class EventEmitter {
    constructor(){
        this.events = []
    }

    on(eventName, callback){
        if(!this.events[eventName]){
            this.events[eventName] = [callback]
        }else{
            this.events[eventName].push(callback)
        }
    }

    emit(eventName){
        this.events[eventName] && this.events[eventName].forEach(cb => cb())
    }
}

class Subject {
    constructor(name){
        this.state = ''
        this.observers = []
    }

    attach(o){
        this.observers.push(o)
    }

    setState(newState){
        this.state = newState
        this.observers.forEach(o => o.update(this))
    }
}

class Observer {
    constructor(name){
        this.name = name
    }
    update(ori){
        console.log()
    }
}

function myFreeze(obj){
    if(obj instanceof Object){
        Object.seal(obj)
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                Object.defineProperty(obj, key, {
                    writable: false
                })
                myFreeze(obj[key])
            }
        }
    }
}

function shuffle(arr) {
    let current = array.length - 1;
    while(current > -1) {
        // 生成一个范围在当前下标到数组末尾元素下标之间的随机整数
        const random = Math.floor(array.length * Math.random());
        // 将当前元素和随机选出的下标所指的元素互相交换 
        [array[current], array[random]] = [array[random], array[current]];
        current--;
    }
    return array;
};

function throttle(fn,wait){
    let timer = null
    return function(...args){
        if(!timer){
            timer = setTimeout(() => {
                timer = null
                fn.apply(this,args)
            },wait)
        }
    }
}

function race(promises){
    return new Promise((resolve,reject) => {
        for(let i = 0; i < promises.length; i++){
            Promise.resolve(promises[i])
                .then(res => {
                    return resolve(res)
                })
                .catch(err => {
                    return reject(err)
                })
        }
    })
}

class Observer {
    constructor(data){
        for(let key of Object.keys(data)){
            if(typeof data[key] === 'object'){
                data[key] = new Observer(data[key])
            }

            Object.defineProperties(this,key,{
                enumerable: true,
                configurable: true,
                get(){
                    return data[key]
                },
                set(newVal){
                    if(newVal === data[key]){
                        return
                    }
                    data[key] = newVal
                }
            })
        }
    }
}