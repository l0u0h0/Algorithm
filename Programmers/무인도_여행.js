function solution(maps) {
  const answer = [];
  maps = maps.map((e) => e.split(""));
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  const visited = Array.from({ length: maps.length }, () =>
    Array(maps[0].length).fill(false)
  );

  const queue = [];

  const bfs = () => {
    let cur;
    let food = 0;

    while (queue.length > 0) {
      cur = queue.shift();
      food += parseInt(maps[cur[0]][cur[1]]);

      for (let i = 0; i < 4; i++) {
        const next = [cur[0] + dx[i], cur[1] + dy[i]];
        if (
          next[0] < 0 ||
          next[1] < 0 ||
          next[0] >= maps.length ||
          next[1] >= maps[0].length ||
          visited[next[0]][next[1]] ||
          maps[next[0]][next[1]] == "X"
        )
          continue;
        queue.push([...next]);
        visited[next[0]][next[1]] = true;
      }
    }

    answer.push(food);
  };

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] == "X" || visited[i][j]) continue;
      queue.push([i, j]);
      visited[i][j] = true;
      bfs();
    }
  }

  if (answer.length == 0) return [-1];

  return answer.sort((a, b) => a - b);
}
