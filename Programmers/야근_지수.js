// Priority Queue
// MaxHeap으로 구현
class PriorityQueue {
  constructor() {
    this.queue = [null];
  }

  push(value) {
    this.queue.push(value);

    let cur = this.queue.length - 1;
    let parent = Math.floor(cur / 2);

    while (parent !== 0 && this.queue[parent] < value) {
      const temp = this.queue[parent];
      this.queue[parent] = this.queue[cur];
      this.queue[cur] = temp;
      cur = parent;
      parent = Math.floor(cur / 2);
    }
  }

  pop() {
    if (this.queue.length === 2) return this.queue.pop();

    let value = this.queue[1];

    this.queue[1] = this.queue.pop();

    let cur = 1;
    let left = 2;
    let right = 3;

    while (
      this.queue[cur] < this.queue[left] ||
      this.queue[cur] < this.queue[right]
    ) {
      const temp = this.queue[cur];

      if (this.queue[left] < this.queue[right]) {
        this.queue[cur] = this.queue[right];
        this.queue[right] = temp;
        cur = right;
      } else {
        this.queue[cur] = this.queue[left];
        this.queue[left] = temp;
        cur = left;
      }

      left = cur * 2;
      right = left + 1;
    }

    return value;
  }

  print() {
    return this.queue;
  }
}

function solution(n, works) {
  if (works.reduce((a, c) => a + c, 0) <= n) return 0;

  const pq = new PriorityQueue();

  works.forEach((e) => pq.push(e));

  while (n > 0) {
    let cur = pq.pop();
    pq.push(cur - 1);
    n -= 1;
  }

  return pq.print().reduce((a, c) => a + c ** 2, 0);
}
