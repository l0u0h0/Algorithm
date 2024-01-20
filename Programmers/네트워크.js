function solution(n, computers) {
  var answer = 0;
  const map = new Map();

  computers.forEach((e, i) => {
    e.forEach((v, j) => {
      if (i !== j && v == 1) {
        if (map.has(i)) {
          const arr = map.get(i);
          arr.push(j);
          map.set(i, arr);
        } else {
          const arr = [j];
          map.set(i, arr);
        }
      }
    });
  });

  const visited = Array.from({ length: n }, () => false);

  const dfs = (node) => {
    if (visited[node]) return;
    visited[node] = true;
    if (!map.has(node)) return;
    const nodes = map.get(node);
    for (let i = 0; i < nodes.length; i++) {
      if (!visited[nodes[i]]) dfs(nodes[i]);
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i] && map.has(i)) {
      dfs(i);
      answer += 1;
    } else if (!map.has(i)) answer += 1;
  }

  return answer;
}
