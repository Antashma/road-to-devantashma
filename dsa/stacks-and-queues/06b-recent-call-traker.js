/* 
🃏 Challenge: Implement a Recent Call Tracker

Problem:
You are building a Recent Call Tracker system that keeps track of incoming calls.

- You must implement this using a queue with two stacks.
- Calls arrive with a unique `callerId`.
- You can add calls using `receiveCall(callerId)`.
- The system should process calls in FIFO order when `answerCall()` is called.
- Implement a `peekNextCall()` method to see which caller is next without answering.
- If no calls are left, return "No calls in queue".


📜 Example Input & Expected Output
const tracker = new RecentCallTracker();

tracker.receiveCall("Alice");
tracker.receiveCall("Bob");
tracker.receiveCall("Charlie");

console.log(tracker.peekNextCall()); // "Alice"
console.log(tracker.answerCall());   // "Alice"
console.log(tracker.answerCall());   // "Bob"
console.log(tracker.peekNextCall()); // "Charlie"
console.log(tracker.answerCall());   // "Charlie"
console.log(tracker.answerCall());   // "No calls in queue"

*/

class Queue {
    constructor() {
        
    }
}