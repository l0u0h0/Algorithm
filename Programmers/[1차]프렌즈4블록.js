function solution(m, n, board) {
  let answer = 0;
  const dict = [
    [0, 1],
    [1, 0],
    [1, 1],
  ];
  const map = board.map((e) => e.split(""));
  while (true) {
    const remove = [];
    // 2x2 찾기
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (map[i][j] == 0) continue;
        let cnt = 0;
        for (let k = 0; k < 3; k++) {
          const next = [i + dict[k][0], j + dict[k][1]];
          if (map[next[0]][next[1]] != map[i][j]) break;
          cnt += 1;
        }
        // 찾으면 remove 배열에 넣기
        if (cnt == 3) remove.push([i, j]);
      }
    }
    // 더이상 2x2 없으면 종료
    if (remove.length == 0) break;
    // board에서 찾은 칸들 지워주기
    remove.forEach((e) => {
      map[e[0]][e[1]] = 0;
      for (let i = 0; i < 3; i++) {
        const next = [e[0] + dict[i][0], e[1] + dict[i][1]];
        map[next[0]][next[1]] = 0;
      }
    });
    // board판 빈공간 채우기
    for (let i = 0; i < n; i++) {
      for (let j = m - 2; j >= 0; j--) {
        let x = -1;
        const next = [j + 1, i];
        while (next[0] < m) {
          if (map[next[0]][next[1]] == 0) x = next[0];
          next[0] += 1;
        }
        if (x > 0) {
          map[x][i] = map[j][i];
          map[j][i] = 0;
        }
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] == 0) answer += 1;
    }
  }

  return answer;
}
