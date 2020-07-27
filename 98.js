var permuteUnique = function(nums) {
    let track = []
    let res = []
    let visited = []
    nums.sort()
    backTrack(nums,track,res,visited)
    return res
};

const backTrack = (nums,track,res,visited) => {
    if(track.length === nums.length){
        res.push([...track])
        return
    }
    for(let i = 0; i < nums.length; i++){
        if(visited[i]) continue
        if(i > 0 && nums[i] === nums[i-1] && visited[i-1]) break
        track.push(nums[i])
        visited[i] = true
        backTrack(nums,track,res,visited)
        track.pop()
        visited[i] = false
    }
}

console.log(permuteUnique([1,1,2]))