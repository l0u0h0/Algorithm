function solution(land) {
  let answer = 0;

  const dp = Array.from({ length: land.length }, () => Array(4).fill(0));

  dp[0] = [...land[0]];

  for (let i = 0; i < land.length - 1; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        if (j == k) continue;

        const sum = dp[i][j] + land[i + 1][k];

        if (sum > dp[i + 1][k]) dp[i + 1][k] = sum;
      }
    }
  }

  dp[land.length - 1].forEach((e) => (answer = Math.max(answer, e)));

  return answer;
}
