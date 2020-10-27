class _LazyMan {
    constructor(name){
        this.queue = []
        this.sayName(name)

        setTimeout(() => {
            this.next()
        })

    }

    sayName(name){
        const fn = () => {
            console.log(`hi this is ${name}`)
            this.next()
        }
        this.queue.push(fn)
    }

    next(){
        const fn = this.queue.shift()
        fn && fn()
    }

    _holdOn(time){
        return () => {
            setTimeout(() => {
                console.log(`wake up after ${time}`)
                this.next()
            }, time * 1000)
        }
    }

    sleep(time){
        this.queue.push(this._holdOn(time))
        return this
    }

    eat(name){
        const fn = () => {
            console.log(`eat ${name}`)
            this.next()
        }
        this.queue.push(fn)
        return this
    }

    sleepFirst(time){
        this.queue.unshift(this._holdOn(time))
        return this
    }
}

const lazyMan = (name) => new _LazyMan(name)

lazyMan('hank').sleep(3).eat('dinner').eat('supper')


function search(arr,target){
    let start = 0
    let end = arr.length - 1
    let mid = Math.floor((start+end)/2)
    while(start <= end){
        if(arr[mid] == target){
            return mid
        }else if(arr[mid] > target){
            end = mid - 1
        }else if(arr[mid] < target){
            start = mid
        }
    }
    return -1
}