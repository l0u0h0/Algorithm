function solution(k, dungeons) {
  var answer = -1;
  const visited = Array.from({ length: dungeons.length }, () => false);
  const dfs = (num, depth, idx, visited) => {
    if (depth > dungeons.length) return depth;
    answer = Math.max(answer, depth);
    for (let i = 0; i < dungeons.length; i++) {
      if (visited[i]) continue;
      if (dungeons[i][0] <= num) {
        visited[i] = true;
        dfs(num - dungeons[i][1], depth + 1, i, visited);
        visited[i] = false;
      }
    }
  };

  for (let i = 0; i < dungeons.length; i++) {
    if (visited[i]) continue;
    if (dungeons[i][0] <= k) {
      visited[i] = true;
      dfs(k - dungeons[i][1], 1, i, visited);
      visited[i] = false;
    }
  }

  return answer;
}
