function solution(n, k) {
  const answer = [];

  const nums = Array.from({ length: n }, (_, i) => i + 1);

  for (let i = 1; i <= n; i++) {
    let factorial = 1;
    for (let j = 1; j <= n - i; j++) factorial *= j;

    const index = Math.ceil(k / factorial) - 1;
    k -= factorial * index;
    answer.push(nums.splice(index, 1)[0]);
  }

  return answer;
}
