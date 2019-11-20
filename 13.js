let calc = (arr,k) => {
    if(arr == null || arr.length == 0 || k <= 0){
        return 0
    }
    let left = 0
    let right = 0
    let len = 0
    let sum = arr[0]
    while(right < arr.length){
        if(sum == k){
            len = Math.max(len, right - left + 1)
            sum -= arr[left++]
        }else if(sum < k){
            right++
            if(right > arr.length){
                break
            }
            sum += arr[right]
        }else{
            sum -= arr[left++]
        }
    }
    return len
}

let arr = [1,2,1,1,1]

console.log(calc(arr,2))