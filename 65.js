const move = (nums) => {
    // 非0元素
    let k = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i]){
            if(i != k){
                swap(nums,k++,i)
            }else{
                k++
            }
        }
    }
}

const swap = (arr,index1,index2) => {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}


const removeElement = (nums,val) => {
    let ans = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != val){
            nums[ans] = nums[i]
            ans++
        }
    }
    return ans
}