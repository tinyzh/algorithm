let sort = (arr) => {
    let temp = 0
    let next = 0
    for(let i = 0; i < arr.length; i++){
        temp = arr[i]
        while(arr[i] != i + 1){
            next = arr[temp - 1]
            arr[temp - 1] = temp
            temp = next
        }
    }
    console.log(arr)
}

let arr = [1,2,5,4,3]
sort(arr)