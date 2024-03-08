class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.init();
  }

  init() {
    this.count = 0;
    this.front = null;
    this.rear = null;
  }

  unshift(value) {
    const node = new Node(value);

    if (!this.front) {
      this.front = node;
      this.rear = node;
    } else {
      const cachedPrevFront = this.front;
      cachedPrevFront.prev = node;

      this.front = node;

      node.next = cachedPrevFront;
    }

    this.count += 1;
    return this.count;
  }

  shift() {
    if (this.count == 0) return null;

    const value = this.front.value;

    if (this.count == 1) {
      this.init();
    } else {
      this.front = this.front.next;
      this.front.prev = null;
      this.count -= 1;
    }

    return value;
  }

  push(value) {
    const node = new Node(value);

    if (this.count === 0) {
      this.front = node;
      this.rear = node;
    } else {
      const cachedPrevRear = this.rear;
      cachedPrevRear.next = node;

      node.prev = cachedPrevRear;

      this.rear = node;
    }

    this.count += 1;

    return this.count;
  }

  pop() {
    if (this.count == 0) return null;

    const value = this.rear.value;

    if (this.count == 1) {
      this.init();
    } else {
      this.rear = this.rear.prev;
      this.rear.next = null;
      this.count -= 1;
    }

    return value;
  }

  getValue(index) {
    if (index >= this.count) return null;

    let node = this.front;

    for (let i = 0; i < index; i++) {
      node = node.next;
    }

    return node.value;
  }

  getArray() {
    const arr = [];
    let node = this.front;

    for (let i = 0; i < this.count; i++) {
      arr.push(node.value);
      node = node.next;
    }

    return arr;
  }

  size() {
    return this.count;
  }
}

function solution(stones, k) {
  let answer = Infinity;

  const deque = new Deque();

  stones.forEach((e, i) => {
    const value = {
      idx: i,
      value: e,
    };

    if (deque.size() == 0) {
      deque.push(value);
    } else {
      if (deque.front.value.idx <= i - k) {
        deque.shift();
      }
      for (let i = 0; i < k; i++) {
        if (deque.size() == 0) break;
        if (deque.rear.value.value < e) {
          deque.pop();
        } else {
          break;
        }
      }

      deque.push(value);
    }
    if (i >= k - 1) {
      answer = Math.min(deque.front.value.value, answer);
    }
  });

  return answer;
}
