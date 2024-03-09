function solution(N, road, K) {
  const answer = new Map();

  const map = new Map();

  road.forEach((e) => {
    const [start, end, weight] = [...e];

    if (map.has(start)) {
      map.set(start, [...map.get(start), [end, weight]]);
    } else {
      map.set(start, [[end, weight]]);
    }

    if (map.has(end)) {
      map.set(end, [...map.get(end), [start, weight]]);
    } else {
      map.set(end, [[start, weight]]);
    }
  });

  const dfs = (weight, cur, visited) => {
    if (!map.has(cur)) return;
    answer.set(cur, 1);

    for (const next of map.get(cur)) {
      if (visited[next[0]] || weight + next[1] > K) continue;
      visited[next[0]] = true;
      dfs(weight + next[1], next[0], visited);
      visited[next[0]] = false;
    }
  };

  const visited = Array(N + 1).fill(false);

  visited[1] = true;

  dfs(0, 1, visited);

  return answer.size;
}
