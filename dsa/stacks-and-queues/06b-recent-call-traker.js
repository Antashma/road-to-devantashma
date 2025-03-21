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

Make sure: 
✅ Only move elements when necessary: Reduces redundant operations, making it more efficient.
✅ FIFO behavior remains correct: Ensures calls are answered in the order they were received.
✅ Handles edge cases gracefully: If both stacks are empty, it properly returns "No calls in queue".


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


✨ Bonus Challenge (If You're Feeling Brave!)
- Modify the class to limit the call history to only the last N calls.
- If more than N calls are received, remove the oldest automatically.

*/

/* 
NOTES:

-- add new calls to incoming queue
-- answer queue takes all calls from incoming and pops them to iself

recieved: []
answering : [lucian, errol, mom]
answercall = ada
peek = mom (end of answer queue)
if answerQueue === [], return no calls left
*/


class RecentCallTracker {
    constructor(limit) {
        this.received = [];
        this.answering = [];
        this.limit = limit || -1;
    }

    receiveCall(callerId) {
        if (this.limit > 0 && this.received.length === this.limit) this.received.shift();
        this.received.push(callerId);
    }

    answerCall(){
        if (this.answering.length === 0) {
            while (this.received.length > 0) this.answering.push(this.received.pop());
        }
        return this.answering.pop() || "[AC] No calls in queue";
    }

    peekNextCall() {
        return this.answering[this.answering.length - 1] || this.received[0] || "[PEEK] No calls in queue";
    }
}

const tracker = new RecentCallTracker(6);

tracker.receiveCall("Alice");
tracker.receiveCall("Bob");
tracker.receiveCall("Charlie");

console.log(tracker.peekNextCall()); // "Alice"
console.log(tracker.answerCall());   // "Alice"

tracker.receiveCall("Yolonde");

console.log(tracker.answerCall());   // "Bob"
console.log(tracker.peekNextCall()); // Charlie
console.log(tracker.answerCall());   // Charlie
console.log(tracker.answerCall());   // Yolonde
console.log(tracker.answerCall());   // "No calls in queue"
tracker.receiveCall("Melissa");
tracker.receiveCall("Doug");
tracker.receiveCall("Vera");
console.log(tracker.peekNextCall())
tracker.receiveCall("Beth");
tracker.receiveCall("Oswald");
tracker.receiveCall("Kent");
console.log(tracker);