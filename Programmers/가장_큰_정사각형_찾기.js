function solution(board) {
  let answer = 1;
  let temp = 0;

  for (const check of board) {
    temp += check.reduce((a, c) => a + c);
  }

  if (temp === 0) return 0;

  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[i].length; j++) {
      if (board[i][j] >= 1) {
        board[i][j] =
          Math.min(board[i][j - 1], board[i - 1][j], board[i - 1][j - 1]) + 1;
        answer = Math.max(answer, board[i][j]);
      }
    }
  }

  return answer ** 2;
}
