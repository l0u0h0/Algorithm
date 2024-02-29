function solution(n, wires) {
  let answer = Infinity;
  let cnt = 0;
  // wires를 한번씩 돌아보며 두 트리 차이가 가장 적은 값 찾기
  // wires 중 선택한 한 값을 두 트리의 시작점으로 판별

  const dfs = (cur, nodes, visited) => {
    cnt += 1;

    if (!nodes.has(cur) || visited[cur]) return;

    visited[cur] = true;

    for (const node of nodes.get(cur)) {
      if (visited[node]) continue;
      dfs(node, nodes, visited);
    }
  };

  for (let i = 0; i < wires.length; i++) {
    // 시작점
    const cur = wires[i];
    // 끊은 간선을 제외한 양방향 간선 정보
    const nodes = new Map();

    for (let j = 0; j < wires.length; j++) {
      if (i == j) continue;

      if (nodes.has(wires[j][0])) {
        nodes.set(wires[j][0], [...nodes.get(wires[j][0]), wires[j][1]]);
      } else {
        nodes.set(wires[j][0], [wires[j][1]]);
      }
      if (nodes.has(wires[j][1])) {
        nodes.set(wires[j][1], [...nodes.get(wires[j][1]), wires[j][0]]);
      } else {
        nodes.set(wires[j][1], [wires[j][0]]);
      }
    }
    let num = 0;

    for (let k = 0; k < 2; k++) {
      cnt = 0;
      dfs(cur[k], nodes, Array(n + 1).fill(false));
      num += k > 0 ? cnt : -cnt;
    }

    answer = Math.min(Math.abs(num), answer);
  }

  return answer;
}
