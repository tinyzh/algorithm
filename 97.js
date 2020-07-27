
var solveNQueens = function (n) {
    // 初始化棋盘
    //[
    // [ '.', '.', '.', '.' ],
    // [ '.', '.', '.', '.' ],
    // [ '.', '.', '.', '.' ],
    // [ '.', '.', '.', '.' ]
    // ]
    let board = []
    for(var i=0;i<n;i++){
        board[i]=new Array();
        for(var j=0;j<n;j++){
            board[i][j]='.'
        }
    }
    let row = 0
    let res = []


    backTrack(board, row,res)
    return res
};

const backTrack = (board, row,res) => {
    // 结束条件
    
    if (board.length === row) {
        // console.log(board)
        var c=[];
        for(var i=0;i<board.length;i++){
            c.push(board[i].join(''));
        }
        res.push(c);
        return
    }
    // 第几行的长度
    let n = board.length
    // 每一列都是可以放置皇后的选择
    for (let col = 0; col < n; col++) {
        // 排除不合法选择
        if (!isValid(board, row, col)) {
            continue
        }
        // 进行选择
        board[row][col] = 'Q'
        // 进入下一行决策
        backTrack(board, row + 1,res)
        // 撤销选择  回溯
        board[row][col] = '.'
    }
}

const isValid = (list, row, col) => {
    const len = list.length;
    // 同一列
    for (let i = 0; i < len; i++) {
        if (list[i][col] === 'Q') return false;
    }
    // 斜右上方
    for (let i = row - 1, j = col + 1; i >= 0 && j < len; i--, j++) {
        if (list[i][j] === 'Q') return false;
    }
    // 斜左上方
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (list[i][j] === 'Q') return false;
    }
    return true;
}