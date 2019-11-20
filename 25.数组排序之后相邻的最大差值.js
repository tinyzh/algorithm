const maxVal = (arr) => {
    arr.sort((a,b) => a - b)
    let max = 0
    arr.map((item,index) => {
        if(index < arr.length - 2){
            max = Math.max(max,arr[index+1] - item)
        }
        
    })
    return max
}

// let arr = [9,3,1,10]
let arr = [5,5,5,5]

console.log(maxVal(arr))

