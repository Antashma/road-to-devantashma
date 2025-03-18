//Example Challenge: Reverse a String Using a Stack

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

function reverseString(str) {
    let stack = new Stack();
    for (let char of str) {
        stack.push(char);
    }
    let reversed = "";
    while (!stack.isEmpty()) {
        reversed += stack.pop();
    }
    return reversed;
}
console.log(reverseString("hello")); // Output: "olleh"

