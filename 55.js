const superEggDrop = (K,N) => {
    let remainTestCount = 1
    while(getConfirmFloors(remainTestCount,K) < N){
        ++remainTestCount
    }
    return remainTestCount
}

const getConfirmFloors = (ramainTestCount,eggsCount) => {
    if(remainTestCount == 1 || eggsCount == 1){
        return remainTestCount
    }
    return getConfirmFloors(remainTestCount - 1,eggsCount - 1) + 1 + getConfirmFloors(remainTestCount - 1,eggsCount)
}