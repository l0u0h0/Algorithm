function solution(n, s) {
  if (n > s) return [-1];
  const answer = Array.from({ length: n }, () => Math.floor(s / n));

  for (let i = 0; i < s % n; i++) {
    answer[i] += 1;
  }

  return answer.sort((a, b) => a - b);
}
