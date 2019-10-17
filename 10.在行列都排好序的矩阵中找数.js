let isContains = (matrix,k) => {
    let row = 0
    let col = matrix[0].length
    while(row < matrix.length && col > -1){
        if(matrix[row][col] === k){
            return true
        }else if(matrix[row][col] < k){
            row++
        }else{
            col--
        }
    }
    return false
}

let arr = [[0,1,2,5],[2,3,4,7],[4,4,4,8],[5,7,7,9]]

console.log(isContains(arr,15))