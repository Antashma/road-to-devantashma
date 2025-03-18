/* 

🚀🚀🚀 Challenge 3: Implement a Browser's Back and Forward Functionality Using Stacks 🚀🚀🚀
- Implement a browser history using two stacks (backStack and forwardStack).
- Functions: visit(url), back(), forward().
- back() should move the current page to forwardStack and restore the previous page from backStack. 

*/

class Stack {
    constructor(stackName) {
        this.name = stackName;
        this.items = []; 
    }
    
    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.isEmpty()) return "Underflow";
        const popped = this.items.pop();
        return popped;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peekLIFO() {
        return this.items[this.items.length - 1];
    }

    printStack() {
        console.log(`[${this.name}] ${this.items.join(" -> ")}`)
    }
}


class BrowserHistory {
    constructor() {
        this.backStack = new Stack("Back Stack");
        this.forwardStack = new Stack("Forward Stack");
        this.current;
    }

    visit(url){
        this.current = url;
        this.backStack.push(url);
        this.forwardStack.items = [];
    }

    back() {
        if (this.backStack.isEmpty()) return "Back history end."

        this.forwardStack.push(this.backStack.pop());
        this.current = this.backStack.peekLIFO();
    }

    forward() {
        if(this.forwardStack.isEmpty()) return "Forward history end."
        const popped = this.forwardStack.pop();
        this.backStack.push(popped);
        this.current = popped;
    }
  
}

const browser = new BrowserHistory();
browser.visit("google");
browser.visit("cnn");
browser.visit("amazon");
browser.visit("reddit");
browser.visit("youtube");

browser.back();
browser.back();
browser.forward();
browser.visit("google news")
browser.visit("chatgpt")
browser.back();
browser.forward();



console.log(browser)

