
var permute = function(nums) {
    let track = []
    let res = []
    backtrack(nums,track,res)
    console.log(res)
    return res
};

const backtrack = (nums,track,res) => {
    if(track.length == nums.length){
        // res.push(track)无效
        // 这里需要对track进行复制  如果只是单独的push track  
        // 其实只是push了track的引用
        res.push([...track])
        return
    }
    for(let i of nums){
        if(track.includes(i)){
            continue
        }
        track.push(i)
        backtrack(nums,track,res)
        track.pop()
    }
}

permute([1,2,3,4])