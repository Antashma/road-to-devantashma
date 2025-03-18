// Problem 2: Implementing a Queue Using Two Stacks
class Stack {
    constructor() {
        this.items = []
    }
    push(item) {
        this.items.push(item)
    }
    pop() {
        if (this.isEmpty()) return "Underflow";
        return this.items.pop()  
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    printStack() {
        console.log(this.items.join(" -> "))
    }
}

class QueueUsingStacks { //FIFO
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(item) {
        this.stack1.push(item);
    }

    dequeue() {
        if (this.stack2.isEmpty()) {
            while (!this.stack1.isEmpty()) {
                this.stack2.push(this.stack1.pop())
            }
        };
        return this.stack2.pop();
    }

    // peekFront() {
    //     return this.items[0];
    // }

    // isEmpty() {
    //     return this.items.length === 0;
    // }

    // printQueue() {
    //     console.log(this.items.join(" <- "));
    // }

}
let queue = new QueueUsingStacks();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1

