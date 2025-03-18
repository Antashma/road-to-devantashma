# Lesson on Stacks and Queues in JavaScript

## What are Stacks and Queues?

Stacks and queues are linear data structures that dictate how elements are added and removed:

- **Stack (LIFO - Last In, First Out)**: Think of a stack of plates. You add (push) plates on top, and remove (pop) from the top.

- **Queue (FIFO - First In, First Out)**: Think of a line at a ticket counter. The person who gets in first gets served first.

## Implementing Stacks in JavaScript

```js
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.isEmpty()) return "Underflow";
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    printStack() {
        console.log(this.items.join(" -> "));
    }
}
```
## Implementing Queues in JavaScript
```js
class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        if (this.isEmpty()) return "Underflow";
        return this.items.shift();
    }
    front() {
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    printQueue() {
        console.log(this.items.join(" <- "));
    }
}
```

## Best Use Cases

### Stacks:
- Undo/Redo functionality in editors
- Backtracking (e.g., navigating browser history)
- Expression evaluation (e.g., parsing arithmetic expressions)

### Queues:
- Scheduling tasks (e.g., job scheduling in OS, task queues in JavaScript event loop)
- Handling requests in order (e.g., print queue, customer service system)
- Breadth-first search (BFS) in algorithms
