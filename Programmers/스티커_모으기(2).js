function solution(sticker) {
  if (sticker.length == 1) return sticker[0];
  if (sticker.length == 2) return Math.max(sticker[0], sticker[1]);
  let answer = 0;

  const dp1 = sticker.map((e) => e);
  const dp2 = sticker.map((e) => e);
  dp1[1] = Math.max(dp1[1], dp1[0]);
  dp2[0] = 0;
  // 첫 번째부터 뜯는 경우
  for (let i = 2; i < sticker.length - 1; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + dp1[i]);
  }
  // 두 번째부터 뜯는 경우
  for (let i = 2; i < sticker.length; i++) {
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + dp2[i]);
  }

  return Math.max(dp1[dp1.length - 2], dp2[dp2.length - 1]);
}
