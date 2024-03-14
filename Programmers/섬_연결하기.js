function solution(n, costs) {
  const getParent = (graph, x) => {
    if (graph[x] === x) return x;
    return (graph[x] = getParent(graph, graph[x]));
  };

  const unionParent = (graph, a, b) => {
    a = getParent(graph, a);
    b = getParent(graph, b);

    if (a < b) graph[b] = a;
    else graph[a] = b;
  };

  const findParent = (graph, a, b) => {
    a = getParent(graph, a);
    b = getParent(graph, b);

    if (a === b) return true;
    else return false;
  };

  costs.sort((a, b) => a[2] - b[2]);

  const graph = new Array(n);

  for (let i = 0; i < n; i++) {
    graph[i] = i;
  }

  let cost = 0;

  for (let i = 0; i < costs.length; i++) {
    if (!findParent(graph, costs[i][0], costs[i][1])) {
      cost += costs[i][2];
      unionParent(graph, costs[i][0], costs[i][1]);
    }
  }

  return cost;
}
