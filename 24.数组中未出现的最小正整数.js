const missNum = (arr) => {
    let l = 0
    let r = arr.length
    while(l < r){
        if(arr[l] == 1 + 1){
            l++
        }else if(arr[l] <= 1 || arr[l] > r || arr[arr[l] - 1] == arr[l]){
            arr[l] = arr[--r]
        }else{
            swap(arr, l, arr[l] - 1)
        }
    }
    return l + 1
}