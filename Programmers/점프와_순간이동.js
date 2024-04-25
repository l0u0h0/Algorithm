function solution(n) {
  let ans = 0;

  if (n < 3) return 1;
  else if (n == 3) return 2;

  let cnt = n;

  while (cnt > 0) {
    // 홀수라면
    if (cnt % 2 !== 0) {
      cnt -= 1;
      ans += 1;
      cnt /= 2;
    }
    // 짝수라면
    else {
      cnt /= 2;
    }
  }

  return ans;
}
