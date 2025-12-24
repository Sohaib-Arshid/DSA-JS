class Node {
    constructor(data) {
        this.prev = null;
        this.value = data;
        this.next = null
    }
}

class DeleteDLL {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    Append(data) {
        const newNode = new Node(data)
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const currentNode = this.tail;
            currentNode.next = newNode;
            newNode.prev = currentNode;
            this.tail = newNode;
        }
        // console.log(newNode.value);
    }

    PrePend(data) {
        const newNode = new Node(data)
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const currentNode = this.head;
            newNode.next = currentNode;
            currentNode.prev = newNode;
            this.head = newNode;
        }
    }

    Treverse() {
        if (this.head == null) {
            return;
        } else {
            let currentNode = this.head;
            do {
                console.log(currentNode.value);
                currentNode = currentNode.next
            } while (currentNode !== null)
        }
    }

    Delete(data) {
        if (this.head == null) {
            return;
        } else {
            let currentNode = this.head;
            while (currentNode !== null) {
                if (currentNode.value === data) {
                    
                    if (this.head === this.tail) {
                        this.head = null;
                        this.tail = null
                    }

                    // Delete First
                    else if (currentNode === this.head) {
                        this.head = currentNode.next;
                        this.head.prev = null;
                    }

                    // Delete Last
                    else if (currentNode === this.tail) {
                        this.tail = currentNode.prev;
                        this.tail.next = null;
                    }

                    // Delete Mid 
                    else if (currentNode.prev) {
                        currentNode.prev.next = currentNode.next;
                    }
                    else if (currentNode.next) {
                        currentNode.next.prev = currentNode.prev;
                    }

                    break;

                }
                currentNode = currentNode.next;
            }
        }
    }
}

const Node1 = new DeleteDLL()
Node1.Append(12)
Node1.Append(13)
Node1.Append(14)
Node1.Append(15)

Node1.Delete(12)
Node1.Delete(15)
Node1.Delete(13)
Node1.Delete(14)

Node1.Append(16)
Node1.Append(16)
Node1.Append(16)
Node1.Append(16)
Node1.Append(16)
Node1.PrePend(15)
Node1.Delete(15)





Node1.Treverse()

