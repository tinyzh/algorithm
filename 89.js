const merge = (intervals) => {
    if(!intervals.length) return []
    let res = []
    intervals.sort((a,b) => a[0] - b[0])
    res.push(intervals[0])
    for(let i = 1; i < intervals.length; i++){
        let cur = intervals[i]
        let last = res[res.length-1]
        if(cur[0] <= last[1]){
            last[1] = Math.max(cur[1],last[1])
        }else{
            res.push(cur)
        }
    }
    return res
}

<div id="father">
    <a href="#">链接1号</a>
    <a href="#">链接2号</a>
    <a href="#">链接3号</a>
    <a href="#">链接4号</a>
    <a href="#">链接5号</a>
    <a href="#">链接6号</a>
  </div>