function solution(board) {
  const N = board.length;
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  const dp = Array.from({ length: N }, () => Array(N).fill(Infinity));

  dp[0][0] = 0;
  if (board[0][1] === 0) dp[0][1] = 100;
  if (board[1][0] === 0) dp[1][0] = 100;

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  const isPossible = (r, c) => {
    if (
      r < 0 ||
      c < 0 ||
      r >= N ||
      c >= N ||
      board[r][c] === 1 ||
      visited[r][c]
    )
      return true;
    return false;
  };

  const dfs = (r, c, cost, direct) => {
    if (r === N - 1 && c === N - 1) return;

    for (let i = 0; i < 4; i++) {
      const next = [r + dx[i], c + dy[i], cost];
      next[2] += i == direct || direct >= 4 ? 100 : 600;
      if (isPossible(next[0], next[1]) || dp[next[0]][next[1]] < next[2])
        continue;
      dp[next[0]][next[1]] = next[2];
      visited[next[0]][next[1]] = true;
      dfs(...next, i);
      visited[next[0]][next[1]] = false;
    }
  };

  dfs(0, 0, 0, 10);

  return dp[N - 1][N - 1];
}
