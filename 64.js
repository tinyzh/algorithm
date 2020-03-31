const find = (arr,target) => {
    if(!arr.length) return -1
    let left = 0
    let right = arr.length - 1
    while(left <= right){
        // let mid = Math.floor((left + right) / 2)
        let mid = l + (r-l) / 2
        if(arr[mid] == target){
            return mid
        }else if(arr[mid] > target){
            right = mid - 1
        }else{
            left = mid + 1
        }
    }
    return -1
}

let arr = [1,6,34,656,234234,33,23]
let target = 34
console.log(find(arr,target))