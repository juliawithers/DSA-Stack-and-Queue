class _Node {
    // create a node that will always have next as null because we are pointing in the other direction. null will always be first in the queue
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedQueue {
     // create variables first and last so we can track the queue (firstNode -> node2 -> node3 -> ...-> LastNode)
     constructor() {
        this.first = null;
        this.last = null;
    }

    // there are two primary functions for QUEUE, enqueue(data) - insertion and dequeue() - removal
    // enqueue can only insert at the end of the queue @ this.last
    // dequeue can only remove at the beginning of the queue @ this.first

    enqueue(data) {
        // create a new node = {value: data, next: null}
        const node = new _Node(data);

        // if last is null, it means the queue is empty so make this node equal to this.first
        if (this.last === null) {
            this.first = node;
            this.last = this.first;
        }
        // if the list is not empty, then you need to point last to the new node, and set the new nodes previous equal to last. reset this.last to the new nodes last. 
        else {
            this.last.next = node;
            this.last.next.prev = this.last;
            this.last = this.last.next;
        }
    }

    dequeue() {
        // if there is no queue
        if (this.first === null) {
            return;
        }
        // change the this.first variable so that it now equals the second node, return the value of the dequeued node.
        else {
            temp = this.first.data;
            this.first = this.first.next;
            this.first.prev = null;
            return temp;
        }
    }
}
module.exports = DoublyLinkedQueue;