// pop push getMin
// leetcode https://leetcode-cn.com/problems/min-stack/

class MinStack{
    constructor(){
        this.stackData = []
        this.stackMin = []
    }

    push(item){
        if(!this.stackMin.length || item <= this.stackMin[this.stackMin.length - 1]){
            this.stackMin.push(item)
        }
        this.stackData.push(item)
    }

    pop(){
        let val = this.stackData.pop()
        if(val === this.stackMin[this.stackMin.length-1]){
            this.stackMin.pop()
        }
        return val
    }

    getMin(){
        return this.stackMin[this.stackMin.length - 1]
    }

    top(){
        return this.stackData[this.stackData.length - 1]
    }
}