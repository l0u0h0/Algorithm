function solution(maps) {
  let answer = -1;
  let cnt = 0;
  const arr = [];
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  arr.push([0, 0, 1]);
  const visited = Array.from({ length: maps.length }, () =>
    Array.from({ length: maps[0].length }, () => false)
  );
  while (arr.length > 0) {
    const node = arr.shift();
    if (visited[node[0]][node[1]]) continue;
    visited[node[0]][node[1]] = true;
    if (node[0] == maps.length - 1 && node[1] == maps[0].length - 1) {
      answer = node[2];
      break;
    }
    for (let i = 0; i < 4; i++) {
      const nextR = dx[i] + node[0];
      const nextC = dy[i] + node[1];
      if (
        nextR < 0 ||
        nextR >= maps.length ||
        nextC < 0 ||
        nextC >= maps[0].length
      )
        continue;
      if (!visited[nextR][nextC] && maps[nextR][nextC] == 1)
        arr.push([nextR, nextC, node[2] + 1]);
    }
  }

  return answer;
}
