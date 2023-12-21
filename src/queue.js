const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {

  constructor() {
    this.queue = {};
    this.head = 0;
    this.tail = 0;

  }

  getUnderlyingList() {
    return this.queue[this.head]
    //return this.queue
  }

  enqueue(value) {
    if (this.tail == 0) {
      const item = new Node(value);
      this.queue[this.tail] = item
    }
    else {
      let currrent = this.queue[this.head]
      while (currrent.next) {
        currrent = currrent.next
      }
      currrent.next = new Node(value)
    }
    this.tail++
    // return this.queue.push(value) = new Node(value);
  }

  dequeue() {
    let item = this.queue[this.head]
    this.queue[this.head] = item.next
    this.tail--
    return item.value
    //return this.queue.shift()
  }

}

module.exports = {
  Queue
};
