/* 
Challenge 1: Implement a Stack Using Queues
- Implement a stack using two queues.
- The push method should insert an element.
- The pop method should remove the last inserted element.
*/

let nextQueueId = 1;
class Queue {
    constructor() {
        this.queueId = nextQueueId++;
        this.items = [];
    }

    enqueue(el) {
        this.items.push(el);
        this.printQueue();
    }

    dequeue() {
        if (this.isEmpty()) return "Underflow";
        const removed = this.items.shift();
        this.printQueue();
        return removed;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peekFO() {
        return this.items[0];
    }

    printQueue() {
        console.log(`[Queue No.${this.queueId}]\n${this.items.join(" <- ")}\n`)
    }
}



class StackUsingQueues {
    constructor() {
        this.queue1 = new Queue();
        this.queue2 = new Queue();
    }

    push(item) {
        this.queue1.enqueue(item);
    }

    pop() {
        if (this.queue2.isEmpty()) {
            while (!this.queue1.isEmpty()) {
                this.queue2.enqueue(this.queue1.dequeue());
            }
        }
        return this.queue2.dequeue();
    }

    printQueues() {
        this.queue1.printQueue();
        this.queue2.printQueue();
    }
}

let stack = new StackUsingQueues();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // Output: 1
stack.push("A");
stack.push("B");
stack.push("C");
stack.pop();
stack.pop();
stack.pop();
stack.printQueues();