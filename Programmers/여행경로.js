function solution(tickets) {
  let answer = [];
  const graph = {};

  tickets.forEach(([start, end], i) => {
    graph[start] !== undefined
      ? graph[start].push([end, i])
      : (graph[start] = [[end, i]]);
    graph[end] !== undefined
      ? (graph[end] = [...graph[end]])
      : (graph[end] = []);
  });

  for (const node in graph) {
    graph[node] = graph[node].sort();
  }

  const visited = Array(tickets.length).fill(false);

  const dfs = (cur, path) => {
    if (path.length == tickets.length + 1 && answer.length === 0) {
      answer = [...path];
      return;
    }

    for (const node of graph[cur]) {
      if (visited[node[1]]) continue;
      visited[node[1]] = true;
      dfs(node[0], [...path, node[0]]);
      visited[node[1]] = false;
    }
  };

  dfs("ICN", ["ICN"]);

  return answer;
}
