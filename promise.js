const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

class Promise {
    constructor(exector){
        // 初始化
        this.status = PENDING
        // 将成功 失败结果放在this上 便于then catch访问
        this.value = undefined
        this.reason = undefined

        // 成功回调
        this.onFulfilledCallbacks = []
        // 失败回调
        this.onRejectedCallbacks = []

        const resolve = value => {
            // 只有进行中状态才能更改状态
            if(this.status === PENDING){
                this.status = FULFILLED
                this.value = value
                // 成功回调执行
                this.onFulfilledCallbacks.forEach(fn => fn(this.value))
            }
        }

        const reject = reason => {
            if(this.status === PENDING){
                this.status = REJECTED
                this.reason = reason
                this.onRejectedCallbacks.forEach(fn => fn(this.reason))
            }
        }

        try{
            // 立即执行exector
            // 把内部的resolve和reject传入exector 用户可以调用resolve和reject
            exector(resolve, reject)
        }catch(e){
            // exector 出错 reject出错误
            reject(e)
        }
    }


    then(onFulfilled, onRejected){
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {
            throw new Error(reason instanceof Error ? reason.message : reason)
        }
        // 保存this
        const self = this
        return new Promise((resolve,reject) => {
            if(self.status === PENDING){
                self.onFulfilledCallbacks.push(() => {
                    try{
                        // 异步执行
                        setTimeout(() => {
                            const result = onFulfilled(self.value)
                            result instanceof Promise ? result.then(resolve, reject) : resolve(result);
                        })
                    }catch(e){
                        reject(e)
                    }
                })
            }
        })
    }

    static resolve(value){
        if(value instanceof Promise){
            return value
        }else{
            return new Promise((resolve,reject) => resolve(value))
        }
    }

    static reject(reason){
        return new Promise((resolve,reject) => {
            reject(reason)
        })
    }
}

Promise.myAll = function(promiseArr){
    return new Promise((resolve,reject) => {
        const ans = []
        let index = 0
        for(let i = 0; i < promiseArr.length; i++){
            promiseArr[i].then(res => {
                ans[i] = res
                index++
                if(index === promiseArr.length){
                    resolve(ans)
                }
            }).catch(err => reject(err))
        }
    })
}

Promise.race = function(promiseArr){
    return new Promise((resolve,reject) => {
        promiseArr.forEach(p => {
            Promise.resolve(p).then(
                val => resolve(val),
                err => reject(err)
            )
        })
    })
}


class Scheduler {
    constructor(){
        this.queue = []
        this.maxCount = 2
        this.runCounts = 0
    }
    add(promiseCreator){
        this.queue.push(promiseCreator)
    }
    taskRun(){
        for(let i = 0; i < this.maxCount; i++){
            this.request()
        }
    }
    request(){
        if(!this.queue || !this.queue.length || this.runCounts >= this.maxCount){
            return
        }
        this.runCounts++
        this.queue.shift()().then(() => {
            this.runCounts--
            this.request()
        })
    }
}

const timeout = time => new Promise(resolve => {
    setTimeout(resolve, time)
})

const scheduler = new Scheduler()

const addTask = (time,order) => {
    scheduler.add(() => timeout(time).then(() => console.log(order)))
}

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');

scheduler.taskStart()