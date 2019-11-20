const letUnique = (arr) => {
    if(arr == null || arr.length < 2){
        return
    }
    let u = 0
    let i = 1
    while(i != arr.length){
        if(arr[i++] != arr[u]){
            swap(arr,++u,i-1)
        }
    }
    console.log(arr)
}

const swap = (arr,left,right) => {
    let temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp
}

let arr = [1,2,2,2,3,3,4,5,6,6,7,7,8,8,8,9]

letUnique(arr)

const sort = (arr) => {
    if(arr == null || arr.length < 2){
        return
    }
    let left = -1
    let index = 0
    let right = arr.length
    while(index < right){
        if(arr[index] == 0){
            swap(arr,++left,index++)
        }else if(arr[index]==2){
            swap(arr,index,--right)
        }else{
            index++
        }
    }
}