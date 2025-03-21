/* 
🃏 Challenge: Implement an "Undo History" System

Problem:
You are building a text editor's undo system, where each action (a word typed) can be undone.

- Use two queues to implement a stack.
- `typeWord(word)`: Adds a word to the undo history.
- `undo()`: Removes and returns the most recently typed word (LIFO behavior).
- `peekLastWord()`: Returns the last word typed without removing it.
- If no actions are left, return "Nothing to undo".


📜 Example Input & Expected Output
const editor = new UndoHistory();

editor.typeWord("Hello");
editor.typeWord("world");
editor.typeWord("!");

console.log(editor.peekLastWord()); // "!"
console.log(editor.undo());         // "!"
console.log(editor.undo());         // "world"
console.log(editor.peekLastWord()); // "Hello"
console.log(editor.undo());         // "Hello"
console.log(editor.undo());         // "Nothing to undo"


✨ Bonus Challenge (For True Tricksters!)
Modify the class to limit the undo history to the last N actions! If more than N actions are stored, the oldest ones should be discarded automatically.

🔮 Now, the spotlight is yours! Can you tame the power of two queues to act like a stack? 
*/

class Queue {
    constructor(name) {
        this.name = name;
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
 
}

class UndoHistory {
    constructor(limit) {
        this.history = new Queue("history");
        this.temp = new Queue("temp");
        this.limit = limit || -1;
    }

    typeWord(word) {
        if (this.limit > 0 && this.history.items.length === this.limit) {
            this.history.dequeue();
        }
        this.history.enqueue(word);
    }

    undo() {
        // `undo()`: Removes and returns the most recently typed word (LIFO behavior).
        if (!this.history.isEmpty()) {
            while (this.history.items.length > 1) this.temp.enqueue(this.history.dequeue());
            const result =  this.history.dequeue();
            [this.temp.items, this.history.items] = [this.history.items , this.temp.items];
            return result;
        } else {
            return "Nothing to undo";
        }
    }

    peekLastWord(){
        if (!this.history.isEmpty()) return this.history.items[this.history.items.length - 1];
        else return "Nothing in history.";
    }

}

const editor = new UndoHistory(2);

editor.typeWord("Hello");
editor.typeWord("my");
editor.typeWord("world");
editor.typeWord("!");

// console.log(editor.peekLastWord()); // "!"
// console.log(editor.undo());         // "!"
// console.log(editor.undo());         // "world"
// console.log(editor.peekLastWord()); // "Hello"
// console.log(editor.undo());         // "Hello"
// console.log(editor.undo());         // "Nothing to undo"

console.log(editor);