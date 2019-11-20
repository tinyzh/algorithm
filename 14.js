let calc = (arr,k) => {
    if(arr == null || arr.length == 0){
        return 0
    }

    let left = 0
    let right = 0
    let len = 0
    let sum = arr[0]
    while(right < arr.length){
        if(sum == k){
            len = Math.max(len,right-left+1)
            if(arr[left+1] <= arr[right+1]){
                sum -= arr[left++]
            }else{
                sum -= arr[right++]
            }
        }else if(sum < k){
            if(arr[left+1] <= arr[right+1]){
                right++
                if(right > arr.length){
                    break
                }
                sum += arr[right]
            }else{
                left++
                sum += arr[left]
            }
        }else{
            if(arr[left+1] <= arr[right+1]){
                left++
                sum -= arr[left]
            }else{
                right++
                sum -= arr[right]
            }
        }
    }

    return len
}

let arr = [5,-2,6,0,5,7,13]

console.log(calc(arr,11))