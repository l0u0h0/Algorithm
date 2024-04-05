function solution(n, left, right) {
  const answer = [];

  for (let i = left; i <= right; i++) {
    let num = (i % n) + 1;
    const idx = Math.trunc(i / n) + 1;
    if (idx > num) num = idx;
    answer.push(num);
  }

  return answer;
}
