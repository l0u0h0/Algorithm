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
      this.storage[0] = value;
    } else {
      this.rear += 1;
      this.storage[this.rear] = value;
    }
  }

  pop() {
    let temp;
    if (this.size() === 0) return null;
    temp = this.storage[this.front];
    delete this.storage[this.front];

    if (this.front === this.rear) {
      this.front = 0;
      this.rear = 0;
    } else {
      this.front += 1;
    }

    return temp;
  }
}

function solution(board) {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  const isPossible = (r, c) => {
    if (
      r < 0 ||
      r >= board.length ||
      c < 0 ||
      c >= board[0].length ||
      board[r][c] == "D"
    )
      return false;
    return true;
  };

  const move = (cur, i) => {
    let [r, c] = [cur[0], cur[1]];

    while (true) {
      r += dx[i];
      c += dy[i];

      if (!isPossible(r, c)) {
        r -= dx[i];
        c -= dy[i];
        break;
      }
    }

    return [r, c, cur[2] + 1];
  };

  const bfs = (r, c) => {
    const start = [r, c, 0];
    const queue = new Queue();
    const visited = Array.from({ length: board.length }, () =>
      Array(board[0].length).fill(false)
    );
    let goalCnt = 0;
    queue.push(start);
    visited[r][c] = true;

    while (queue.size() > 0) {
      const cur = queue.pop();

      if (board[cur[0]][cur[1]] == "G") {
        goalCnt = cur[2];
        break;
      }

      for (let i = 0; i < 4; i++) {
        const next = move(cur, i);

        if (visited[next[0]][next[1]]) continue;
        visited[next[0]][next[1]] = true;
        queue.push(next);
      }
    }

    if (goalCnt === 0) return -1;
    else return goalCnt;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "R") {
        return bfs(i, j);
      }
    }
  }
}
