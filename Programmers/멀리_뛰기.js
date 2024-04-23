function solution(n) {
  const dp = Array.from({ length: 2001 }, () => 0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 3;
  dp[4] = 5;

  for (let i = 5; i < 2001; i++) {
    dp[i] = (dp[i - 2] % 1234567) + (dp[i - 1] % 1234567);
  }

  return dp[n] % 1234567;
}
