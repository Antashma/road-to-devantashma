# 🃏 Stack with Two Queues
Now, a stack with two queues — flipping a FIFO into a LIFO! Deception upon deception!

## How It Works:
We use two queues:
- Queue 1: To hold elements.
- Queue 2: For temporary transfers.

Push Operation:
Enqueue the item in Queue 1.

Pop Operation:
- Transfer all elements except the last from Queue 1 to Queue 2.
- The last element is the top of the stack — dequeue it.
- Swap Queue 1 and Queue 2 for the next operation.

## Code Eaxmple
```js
class StackWithQueues {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(item) {
        this.queue1.push(item);
    }

    pop() {
        if (this.isEmpty()) return "Stack is empty!";

        // Move everything except the last item to queue2
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }

        // This is the "top" of our stack
        const popped = this.queue1.shift();

        // Swap the queues
        [this.queue1, this.queue2] = [this.queue2, this.queue1];

        return popped;
    }

    isEmpty() {
        return this.queue1.length === 0;
    }

    peek() {
        if (this.isEmpty()) return "Stack is empty!";

        return this.queue1[this.queue1.length - 1];
    }
}
```

## Practical Use:
Stacks with two queues may be used when:
- Reverse traversals: Navigating data in the reverse order.
- Mimicking call stacks: Useful in implementing recursive calls iteratively.
- Backtracking: Retracing steps in algorithms like maze-solving.

## Summary
- Best to use when need Stack emulation with FIFO structures
- Complexity is O(n) for push and O(1) for pop
- Best when popping is the dominant operation