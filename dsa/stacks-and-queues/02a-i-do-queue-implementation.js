/*
Queue Implementation & Challenge
Implementing a Queue in JavaScript 
*/

class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
  front() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

/* Challenge: Simulate a Ticketing System Using a Queue */
let ticketQueue = new Queue();
ticketQueue.enqueue("Customer 1");
ticketQueue.enqueue("Customer 2");
ticketQueue.enqueue("Customer 3");

console.log(ticketQueue.dequeue()); // Expected: "Customer 1"
console.log(ticketQueue.dequeue()); // Expected: "Customer 2"
