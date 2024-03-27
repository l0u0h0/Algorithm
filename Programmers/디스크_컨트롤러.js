class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  push(element) {
    this.heap.push(element);
    this.siftUp();
  }

  pop() {
    return this.extractMin();
  }

  siftUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.heap[parentIdx];
      if (this.heap[idx].value < parent.value) {
        [this.heap[idx], this.heap[parentIdx]] = [parent, this.heap[idx]];
        idx = parentIdx;
      } else {
        break;
      }
    }
  }

  extractMin() {
    if (this.isEmpty()) return null;

    let root = this.heap[0];
    if (this.heap.length > 1) {
      this.heap[0] = this.heap.pop();
      this.siftDown();
    } else {
      this.heap.pop();
    }
    return root;
  }

  siftDown() {
    let idx = 0;
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swapIdx = null;

      if (leftChildIdx < this.heap.length) {
        leftChild = this.heap[leftChildIdx];
        if (leftChild.value < this.heap[idx].value) {
          swapIdx = leftChildIdx;
        }
      }

      if (rightChildIdx < this.heap.length) {
        rightChild = this.heap[rightChildIdx];
        if (
          (swapIdx === null && rightChild.value < this.heap[idx].value) ||
          (swapIdx !== null && rightChild.value < leftChild.value)
        ) {
          swapIdx = rightChildIdx;
        }
      }

      if (swapIdx === null) break;

      [this.heap[idx], this.heap[swapIdx]] = [
        this.heap[swapIdx],
        this.heap[idx],
      ];

      idx = swapIdx;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

function solution(jobs) {
  let answer = 0;

  jobs.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  let curTime = 0;

  const visited = Array(jobs.length).fill(false);

  // 요청 수 만큼 반복
  for (let cnt = 0; cnt < jobs.length; cnt++) {
    const pq = new PriorityQueue();

    for (let i = 0; i < jobs.length; i++) {
      if (visited[i] || jobs[i][0] > curTime) continue;
      pq.push({ value: jobs[i][1], idx: i });
    }

    if (pq.isEmpty()) {
      for (let i = 0; i < jobs.length; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        curTime = jobs[i][0] + jobs[i][1];
        answer += jobs[i][1];
        break;
      }
      continue;
    }

    const cur = pq.pop();
    visited[cur.idx] = true;
    answer += cur.value + (curTime - jobs[cur.idx][0]);
    curTime += cur.value;
  }

  return Math.trunc(answer / jobs.length);
}
