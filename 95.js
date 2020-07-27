const permute = (nums) => {
    let track = []
    let res = []
    backTrack(nums,track,res)
    return res

}

const backTrack = (nums,track,res) => {
    if(track.length === nums.length){
        res.push([...track])
        return
    }

    for(let i of nums){
        if(track.includes(i)){
            continue
        }
        track.push(i)
        backTrack(nums,track,res)
        track.pop()
    }
}