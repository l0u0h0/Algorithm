function solution(n, stations, w) {
  let answer = 0;
  let idx = 0;

  for (let i = 1; i <= n; i++) {
    if (idx < stations.length && stations[idx] - w <= i) {
      i = stations[idx] + w;
      idx += 1;
    } else {
      answer += 1;
      i += w * 2;
    }
  }

  return answer;
}
