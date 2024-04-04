function solution(n, times) {
  let left = 1;
  let right = Math.max(...times) * n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const num = times.reduce((a, c) => a + Math.floor(mid / c), 0);

    if (num < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}
