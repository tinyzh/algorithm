let modify = (arr) => {
    if(arr == null || arr.length < 2){
        return
    }
    let even = 0
    let odd = 1
    let end = arr.length - 1
    while(even <= end && odd <= end){
        if(arr[end] % 2 == 0){
            swap(arr,end,even)
            even += 2
        }else{
            swap(arr,end,odd)
            odd += 2
        }
    }
    console.log(arr)
}

const swap = (arr,index1,index2) => {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

let arr = [2,6,4,5,7,10]
modify(arr)