/* 
Problem 1: Checking Balanced Parentheses (Using Stack)

Prompt: Given a string containing just (), {}, and [], determine if it is valid (balanced). 
*/
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


function isValidParentheses(s) {
    const stack = new Stack();

    let pairs = {
        ")":"(",
        "}":"{",
        "]":"["
    }

    for (let char of s) {
        stack.printStack();
        if (Object.values(pairs).includes(char)) {
            stack.push(char);

        } else if (pairs[char]) {
            if (stack.pop() !== pairs[char]) return false;
        }
    }


    return stack.isEmpty();
}

/* 
NOTES: 
input: "({[})"
ouput: false

stack = ["(", "{", "[", ]
*/

console.log(isValidParentheses("({[]})")); // Output: true
console.log(isValidParentheses("({[})"));  // Output: false
