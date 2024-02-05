class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(e) {
    this.queue[this.rear++] = e;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peak() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

class Stack {
  constructor() {
    this.stack = [];
    this.front = 0;
    this.rear = 0;
  }

  enstack(e) {
    this.stack[this.rear++] = e;
  }

  destack() {
    const value = this.stack[this.rear - 1];
    delete this.stack[this.rear - 1];
    this.rear -= 1;
    return value;
  }

  peak() {
    return this.stack[this.rear - 1];
  }

  size() {
    return this.rear;
  }
}

function solution(order) {
  let answer = 0;
  const container1 = new Queue();
  const container2 = new Stack();

  for (j = 1; j <= order.length; j++) {
    container1.enqueue(j);
  }

  let i = 0;

  let flag = false;

  while (i < order.length) {
    while (true) {
      if (order[i] === container1.peak()) {
        container1.dequeue();
        break;
      } else if (order[i] === container2.peak()) {
        container2.destack();
        break;
      } else {
        if (container1.peak() > order[i] && container2.peak() !== order[i]) {
          flag = true;
          break;
        } else if (
          container1.peak() === undefined &&
          container2.peak() !== order[i]
        ) {
          flag = true;
          break;
        }
        container2.enstack(container1.dequeue());
      }
    }
    if (flag) break;
    i++;
  }
  return (answer = i);
}
