const cal = (arr,k) => {
    if(arr == null || arr.length < 2){
        return
    }
    let left = 0
    let right = arr.length - 1
    let res = []
    while(left < right){
        if(arr[left] + arr[right] === k){
            if(left == 0 || arr[left - 1] != arr[left]){
                res.push([arr[left],arr[right]])
            }
            left++
            right--
        }else if(arr[left] + arr[right] > k){
            right--
        }else{
            left++
        }
    }
    console.log(res)
}

let arr = [-8,-4,-3,0,1,1,2,4,5,8,9]

// cal(arr,10)

const calThird = (arr,k) => {
    if(arr == null || arr.length < 3){
        return 
    }
    let res = []
    // 这里到倒数第二个是给最右的元素留一个位置
    for(let i = 0; i < arr.length - 2; i++){
        if(i == 0 || arr[i] != arr[i - 1]){
            print(arr,i,i+1,arr.length - 1, k - arr[i],res)
        }
    }
    console.log(res)
}

const print = (arr,first,left,right,k,res) => {
    while(left < right){
        if(arr[left] + arr[right] < k){
            left++
        }else if(arr[left] + arr[right] > k){
            right--
        }else{
            if(left == first + 1 || arr[left-1] != arr[left]){
                res.push([arr[first],arr[left],arr[right]])
            }
            left++
            right--
        }
    }
}

calThird(arr,10)