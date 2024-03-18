class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    if (this.storage[this.rear] === undefined) {
      return 0;
    } else {
      return this.rear - this.front + 1;
    }
  }

  push(value) {
    if (this.size() === 0) {
      this.storage["0"] = value;
    } else {
      this.rear += 1;
      this.storage[this.rear] = value;
    }
  }

  pop() {
    let temp = 0;

    if (this.front === this.rear) {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front = 0;
      this.rear = 0;
    } else {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front += 1;
    }

    return temp;
  }
}

function solution(maps) {
  let answer = 0;

  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  const point = {};

  maps.forEach((e, i) => {
    e.split("").forEach((v, j) => {
      if (v === "S") point["start"] = [i, j];
      else if (v === "E") point["end"] = [i, j];
      else if (v === "L") point["check"] = [i, j];
    });
  });

  const isPossible = (x, y) => {
    if (
      x >= maps.length ||
      x < 0 ||
      y >= maps[0].length ||
      y < 0 ||
      maps[x][y] === "X"
    )
      return false;
    return true;
  };

  for (let c = 0; c < 2; c++) {
    let start,
      end,
      cnt = 0,
      flag = false;
    if (c === 0) {
      start = point["start"];
      end = point["check"];
    } else {
      start = point["check"];
      end = point["end"];
    }

    const queue = new Queue();
    const visited = Array.from({ length: maps.length }, () =>
      Array(maps[0].length).fill(false)
    );

    queue.push({ node: start, depth: 0 });
    visited[start[0]][start[1]] = true;

    while (queue.size() > 0) {
      const { node, depth } = queue.pop();
      const cur = node;

      if (cur[0] == end[0] && cur[1] == end[1]) {
        flag = true;
        cnt = depth;
        break;
      }

      for (let i = 0; i < 4; i++) {
        const next = [cur[0] + dx[i], cur[1] + dy[i]];

        if (!isPossible(next[0], next[1]) || visited[next[0]][next[1]])
          continue;
        visited[next[0]][next[1]] = true;
        queue.push({ node: next, depth: depth + 1 });
      }
    }

    if (!flag) {
      return -1;
    }

    answer += cnt;
  }

  return answer;
}
