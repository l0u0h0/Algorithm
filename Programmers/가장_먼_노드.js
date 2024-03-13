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

function solution(n, edge) {
  let answer = 0;
  const map = new Map();

  edge.forEach((e) => {
    map.has(e[0]) ? map.get(e[0]).push(e[1]) : map.set(e[0], [e[1]]);
    map.has(e[1]) ? map.get(e[1]).push(e[0]) : map.set(e[1], [e[0]]);
  });

  const queue = new Queue();
  const visited = Array(n + 1).fill(false);

  queue.push({ num: 1, depth: 1 });
  visited[1] = true;

  let maxDepth = 1;

  while (queue.size() > 0) {
    const cur = queue.pop();

    if (maxDepth < cur.depth) {
      maxDepth = cur.depth;
      answer = 1;
    } else if (maxDepth == cur.depth) {
      answer += 1;
    }

    for (const node of map.get(cur.num)) {
      if (visited[node]) continue;
      visited[node] = true;
      queue.push({ num: node, depth: cur.depth + 1 });
    }
  }

  return answer;
}
