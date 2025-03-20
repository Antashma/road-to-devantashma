# Queue with Two Stacks
A queue follows FIFO (First In, First Out), while a stack follows LIFO (Last In, First Out). Using two stacks to mimic a queue? That's pure mischief!

## How It Works:
We use two stacks:
- Stack 1: To handle **enqueuing**.
- Stack 2: To handle **dequeuing**.

### Enqueue Operation:
Simply push the item onto Stack 1.

### Dequeue Operation:
1. If Stack 2 is empty, pop everything from Stack 1 to Stack 2.
2. Pop from Stack 2 to simulate queue behavior.

This "flip" reverses the order, making the first element in Stack 1 the first out of Stack 2 — a perfect, devious FIFO!

```js
class QueueWithStacks {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(item) {
        this.stack1.push(item);
    }

    dequeue() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }

        if (this.stack2.length === 0) return "Queue is empty!";
        return this.stack2.pop();
    }

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    peek() {
        if (!this.isEmpty()) {
            if (this.stack2.length === 0) {
                while (this.stack1.length > 0) {
                    this.stack2.push(this.stack1.pop());
                }
            }
            return this.stack2[this.stack2.length - 1];
        }
        return "Queue is empty!";
    }
}
```
## Practical Use:
Queues with two stacks are typically used in:
- Reversing data: If the data is reversed frequently.
- Undo operations: When performing sequential undo/redo commands.
- Temporary storage: When intermediate data needs to be accessed in a queue-like manner.