function solution(places) {
  const answer = [];
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  const checkPartition = (arr, r, c) => {
    const queue = [];
    const visited = Array.from({ length: 5 }, () => Array(5).fill(false));
    visited[r][c] = true;
    queue.push([r, c, 0]);

    while (queue.length > 0) {
      const cur = queue.shift();

      if ((cur[0] != r || cur[1] != c) && arr[cur[0]][cur[1]] == "P")
        return true;

      for (let i = 0; i < 4; i++) {
        const next = [cur[0] + dx[i], cur[1] + dy[i], cur[2] + 1];
        if (
          next[0] < 0 ||
          next[0] >= 5 ||
          next[1] < 0 ||
          next[1] >= 5 ||
          visited[next[0]][next[1]] ||
          next[2] > 2 ||
          arr[next[0]][next[1]] === "X"
        )
          continue;
        visited[next[0]][next[1]] = true;
        queue.push(next);
      }
    }

    return false;
  };

  for (const place of places) {
    let flag = false;

    for (let i = 0; i < 5; i++) {
      if (flag) break;
      for (let j = 0; j < 5; j++) {
        if (place[i][j] === "P" && checkPartition(place, i, j)) {
          flag = true;
          break;
        }
      }
    }

    if (flag) answer.push(0);
    else answer.push(1);
  }

  return answer;
}
