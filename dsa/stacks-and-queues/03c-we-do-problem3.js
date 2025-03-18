/* 
Fill in the missing parts to complete the functions.

Problem #3: Implement a Stack to Check Balanced Parentheses
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


function isBalanced(str) {
    let stack = new Stack();
    for (let char of str) {
      if (char === "(") {
        stack.push(char);
      } else if (char === ")") {
        if (stack.isEmpty()) {
          return false;
        }
        stack.pop();
      }
    }
    // return ____________; // Fill in the correct condition
    return stack.isEmpty();
} 
  console.log(isBalanced("(())")); // Expected output: true
  console.log(isBalanced("(()")); // Expected output: false
