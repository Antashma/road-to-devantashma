/* 
💻 Challenge: Implement a Round-Robin Task Scheduler using a Queue

📜 Requirements:
You must create a TaskScheduler class that simulates a Round-Robin CPU scheduling algorithm.

Each task has:
- A name (string).
- A time required to complete (integer, in milliseconds).

The CPU processes tasks in order (FIFO), executing each task in time slices (quantum).

If a task is not completed within its allotted quantum, the remaining time is re-enqueued.

The system continues until all tasks are completed.

🔢 Input/Output Examples

📝 Example 1: Basic Execution
const scheduler = new TaskScheduler(3); // Quantum time = 3ms
scheduler.addTask("Task A", 4);
scheduler.addTask("Task B", 2);
scheduler.addTask("Task C", 6);
scheduler.run();

📌 Expected Output:
Processing Task A for 3ms. Remaining: 1ms.
Processing Task B for 2ms. Completed.
Processing Task C for 3ms. Remaining: 3ms.
Processing Task A for 1ms. Completed.
Processing Task C for 3ms. Remaining: 0ms.
Processing Task C for 3ms. Completed.
All tasks completed!

📝 Example 2: All Tasks Fit in Quantum
const scheduler = new TaskScheduler(5);
scheduler.addTask("Task X", 2);
scheduler.addTask("Task Y", 4);
scheduler.run();

📌 Expected Output:
Processing Task X for 2ms. Completed.
Processing Task Y for 4ms. Completed.
All tasks completed!

📝 Example 3: Long Tasks Requeue
const scheduler = new TaskScheduler(2);
scheduler.addTask("Alpha", 5);
scheduler.addTask("Beta", 3);
scheduler.addTask("Gamma", 7);
scheduler.run();

📌 Expected Output:
Processing Alpha for 2ms. Remaining: 3ms.
Processing Beta for 2ms. Remaining: 1ms.
Processing Gamma for 2ms. Remaining: 5ms.
Processing Alpha for 2ms. Remaining: 1ms.
Processing Beta for 1ms. Completed.
Processing Gamma for 2ms. Remaining: 3ms.
Processing Alpha for 1ms. Completed.
Processing Gamma for 2ms. Remaining: 1ms.
Processing Gamma for 1ms. Completed.
All tasks completed!

✨ Bonus Challenge (Optional)
🔥 Implement priority levels!
- Each task gets an optional priority (1 = high, 2 = medium, 3 = low).
- Higher-priority tasks should be processed before lower-priority ones!

*/

class Queue {
    constructor(){
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.isEmpty()) return "Underflow";
        return this.items.shift();
    }

    isEmpty() {
       return this.items.length === 0;
    }

    printQueue() {
        console.log(this.items.join(" <-- "));
    }
}


class TaskScheduler {
    constructor(timeSlice) {
        this.queue = new Queue();
        this.timeSlice = timeSlice;
    }

    addTask(name, time) {
        this.queue.enqueue({name, time});
    }

    run() {
        while (!this.queue.isEmpty()) {
            const removed = this.queue.dequeue();
            const newTime = removed.time - this.timeSlice;

            console.log(
                `Processing ${removed.name} for ${newTime < 0 ? removed.time : this.timeSlice}ms. ${newTime < 0 ? "Completed" : "Remaining: " + newTime + "ms"}.`
            );

            removed.time = newTime;
            if (removed.time >= 0) this.queue.enqueue(removed);
        }

        console.log("All tasks completed!")
    }
}

//TESTS
const scheduler1 = new TaskScheduler(3); // Quantum time = 3ms
scheduler1.addTask("Task A", 4);
scheduler1.addTask("Task B", 2);
scheduler1.addTask("Task C", 6);
scheduler1.run();


const scheduler2 = new TaskScheduler(5);
scheduler2.addTask("Task X", 2);
scheduler2.addTask("Task Y", 4);
scheduler2.run();

const scheduler3 = new TaskScheduler(2);
scheduler3.addTask("Alpha", 5);
scheduler3.addTask("Beta", 3);
scheduler3.addTask("Gamma", 7);
scheduler3.run();


