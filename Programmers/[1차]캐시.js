class Node {
  constructor(data) {
    this.data = data;
    this.prev = 0;
    this.next = 0;
  }
}

class DoublyLinkedList {
  constructor(cacheSize) {
    this.cacheSize = cacheSize;
    this.head = new Node("");
    this.tail = new Node("");
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  LRU(data) {
    let node = this.head.next;
    while (node.data) {
      if (node.data == data) {
        this.cacheHit(node, data);
        return 1;
      }
      node = node.next;
    }
    this.cacheMiss(data);
    return 5;
  }

  cacheHit(node, data) {
    this.removeNode(node);
    this.addFront(data);
  }

  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  addFront(data) {
    let newNode = new Node(data);
    this.head.next.prev = newNode;
    newNode.next = this.head.next;
    this.head.next = newNode;
    newNode.prev = this.head;
  }

  cacheMiss(data) {
    this.addFront(data);
    if (this.totalLen() > this.cacheSize) {
      this.removeTail();
    }
  }

  totalLen() {
    let answer = 0;
    let node = this.head.next;
    while (node.data) {
      answer += 1;
      node = node.next;
    }
    return answer;
  }

  removeTail() {
    this.tail.prev.prev.next = this.tail;
    this.tail.prev = this.tail.prev.prev;
  }
}

function solution(cacheSize, cities) {
  let answer = 0;

  if (cacheSize == 0) return cities.length * 5;

  const list = new DoublyLinkedList(cacheSize);

  cities.forEach((e) => (answer += list.LRU(e.toLowerCase())));

  return answer;
}
