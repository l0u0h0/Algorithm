function solution(rows, columns, queries) {
  const answer = [];

  const arr = Array.from({ length: rows }, () => Array(columns).fill(0));
  let n = 1;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      arr[i][j] = n++;
    }
  }

  const matrix = (x1, y1, x2, y2) => {
    let min = Infinity;

    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    const cur = [x1 - 1, y1 - 1];
    let prev = arr[cur[0]][cur[1]];
    let idx = 0;
    while (true) {
      if (
        cur[0] + dx[idx] >= x2 ||
        cur[0] + dx[idx] < x1 - 1 ||
        cur[1] + dy[idx] >= y2 ||
        cur[1] + dy[idx] < y1 - 1
      ) {
        idx += 1;
      }
      cur[0] += dx[idx];
      cur[1] += dy[idx];

      const temp = arr[cur[0]][cur[1]];
      min = Math.min(temp, min);
      arr[cur[0]][cur[1]] = prev;
      prev = temp;

      if ((cur[0] == x1 - 1 && cur[1] == y1 - 1) || idx == 4) {
        break;
      }
    }
    return min;
  };

  queries.forEach((e) => {
    const [x1, y1, x2, y2] = [...e];
    answer.push(matrix(x1, y1, x2, y2));
  });

  return answer;
}
