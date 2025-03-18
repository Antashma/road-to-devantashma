/* 
🔥🔥🔥 Challenge 2: Find the First Non-Repeating Character Using a Queue 🔥🔥🔥
Given a string, find the first non-repeating character.

⭐ Example #1:
console.log(firstNonRepeatingCharacter("aabcb"));
// Output: 'c' 
- 'a' and 'b' appear multiple times.
- 'c' is the first character that does not repeat.

⭐ Example #2:
console.log(firstNonRepeatingCharacter("swiss")); 
// Output: 'w'
- 's' appears multiple times.
- 'w' is the first character that does not repeat.

⭐ Example #3:
console.log(firstNonRepeatingCharacter("aabbccdde")); 
// Output: 'e'
- All characters from 'a' to 'd' repeat twice.
- e' is the first character that appears only once.
*/

class Queue {
    constructor() {
        this.items = []
    }

    enqueue(item) {
        this.items.push(item);
        //this.printQueue();
    }

    dequeue() {
        if (this.isEmpty()) return "Underflow";
        const removed = this.items.shift();
        //this.printQueue();
        return removed;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peekFront() {
        return this.items[0];
    }

    printQueue() {
        console.log(this.items.join(" <- "))
    }

}

/* 
NOTES
- getcount of each letter and store in {}
- then dequeue each by checking if count > 1,
- if dequeuing count === 1, return that char
*/

function firstNonRepeatingCharacter(s) {
    if (s.length === 0) return "Input is empty string."

    const count = {};
    const queue = new Queue();

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        count[char] = (count[char] || 0) + 1;
        //queue.enqueue(char);
    }
    console.log(count)
    // while (!queue.isEmpty()) {
    //     const letter = queue.dequeue();
    //     if (count[letter] === 1) return letter;
    // }

    for (let char in count) {
        if (count[char] === 1) queue.enqueue(char)
    }

    if (!queue.isEmpty()) return queue.dequeue();
    else return "All characters in string repeat.";
}

// const example1 = firstNonRepeatingCharacter("aabcb");
// const example2 = firstNonRepeatingCharacter("aabbccdde");
// const example3 = firstNonRepeatingCharacter("swiss");
// const example4 = firstNonRepeatingCharacter("");
// console.log({example1, example2, example3, example4})

function firstNonRepeatingCharacterALT(s) {
    if (s.length === 0) return "Input is empty string."

    const count = {};
    const queue = new Queue();

    //setup count reference
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    console.log(count);
    //check reference
    for (let char of s) {
        if (count[char] === 1) queue.enqueue(char)
    }

    if (!queue.isEmpty()) return queue.dequeue();
    else return "All characters in string repeat.";
}

const ALTexample1 = firstNonRepeatingCharacterALT("aabcb");
const ALTexample2 = firstNonRepeatingCharacterALT("aabbccdde");
const ALTexample3 = firstNonRepeatingCharacterALT("swiss");
const ALTexample4 = firstNonRepeatingCharacterALT("");
const ALTexample5 = firstNonRepeatingCharacterALT("racecare");
console.log({ALTexample1, ALTexample2, ALTexample3, ALTexample4, ALTexample5})

