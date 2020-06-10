// STACK - Last in First Out (LIFO)
class _Node {
    // create a node that points to the next data point
    constructor(data,next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    // create a variable top, that is initally set to null because the stack is empty
    constructor() {
        this.top = null;
    }

    // two primary functions are push() - insertion and pop() - removal

    push(data) {
        // if the top is empty (empty node), then we can create a new node there in that location. points to null because there is only one data point
        if (this.top === null) {
            this.top = new _Node(data,null);
            return this.top;
        }

        // if there is a top, then the new data point can be created and point to the previous top data point
        const node = new _Node(data,this.top);
        // the new top is the new node
        this.top = node;
    }

    pop() {
        // grab the last node
        const node = this.top;
        // the new top is the previous node, indicated by node.next
        this.top = node.next;
        // return the value for the poped node
        return node.data;
    }
}
module.exports = Stack;