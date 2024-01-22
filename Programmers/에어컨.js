// 에어컨의 희망온도와 실내온도가 다르다면 매 분 a 소비
// 희망온도와 실내온도가 같다면 매 분 b 소비
// 에어컨이 꺼져있다면 0 소비
// 승객이 탑승 중일 때 실내 온도를 t1 ~ t2로 유지하며 소비를 최소화 하는것이 목적
// dp => dp[i][j] i === 시간, j === 온도, value === 최소 소비 전력

function solution(temperature, t1, t2, a, b, onboard) {
  let answer = Number.MAX_VALUE;
  temperature += 10;
  t1 += 10;
  t2 += 10;
  const min = Math.min(t1, temperature);
  const max = Math.max(t2, temperature);

  const dp = Array.from({ length: onboard.length + 1 }, () =>
    Array.from({ length: 51 }, () => 1000001)
  );

  dp[0][temperature] = 0;

  for (let i = 1; i < onboard.length; i++) {
    let start = 0,
      end = 0,
      energy;
    // 승객이 탑승중이라면
    if (onboard[i]) {
      start = t1;
      end = t2;
    } else {
      start = min;
      end = max;
    }

    for (let j = start; j <= end; j++) {
      if (j - 1 >= min) {
        energy = 0;
        if (j - 1 >= temperature) energy = a;

        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1] + energy);
      }
      if (j == temperature) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j]);
      } else {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + b);
      }
      if (j + 1 <= max) {
        energy = 0;
        if (j + 1 <= temperature) energy = a;

        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j + 1] + energy);
      }
    }
  }
  for (let j = min; j <= max; j++) {
    answer = Math.min(answer, dp[onboard.length - 1][j]);
  }

  return answer == 1000001 ? 0 : answer;
}
