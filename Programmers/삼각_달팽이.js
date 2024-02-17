function solution(n) {
  const answer = [];

  const arr = Array.from({ length: n }, () => Array(n).fill(0));
  arr[0][0] = 1;

  const dx = [1, 0, -1];
  const dy = [0, 1, -1];

  const size = (n ** 2 - n) / 2 + n;

  let idx = 0;
  let x = 0,
    y = 0;

  for (let i = 2; i <= size; i++) {
    x += dx[idx];
    y += dy[idx];
    if (x >= n || y >= n || x < 0 || y < 0 || arr[x][y] != 0) {
      x -= dx[idx];
      y -= dy[idx];
      idx = idx + 1 > 2 ? 0 : idx + 1;
      x += dx[idx];
      y += dy[idx];
    }
    arr[x][y] = i;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] != 0) answer.push(arr[i][j]);
    }
  }

  return answer;
}
