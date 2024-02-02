function solution(m, n, puddles) {
  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

  puddles.forEach((e) => {
    dp[e[1]][e[0]] = -1;
  });

  dp[1][1] = 1;

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if (i == 1 && j == 1) continue;
      if (dp[i][j] == -1) continue;
      let temp = 0;

      if (dp[i][j - 1] !== -1) temp += dp[i][j - 1];
      if (dp[i - 1][j] !== -1) temp += dp[i - 1][j];

      dp[i][j] += temp % 1000000007;
    }
  }

  return dp[n][m];
}
