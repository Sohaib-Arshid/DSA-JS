class Node {
    constructor(data) {
        this.prev = null;
        this.value = data;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.Head = null;
        this.tail = null;
    }

    // Node Added on Last
    AppendEnd(data) {
        const newnode = new Node(data)
        if (this.Head === null) {
            this.Head = newnode;
            this.tail = newnode;
        } else {
            const currentLastNode = this.tail;
            currentLastNode.next = newnode;
            newnode.prev = currentLastNode;
            this.tail = newnode;
        }
        console.log(newnode.value);
    }

    // Node Added on Begining;
    prepend(data) {
        const newnode = new Node(data);
        if (this.tail === null) {
            this.Head = newnode;
            tis.tail = newnode;
        } else {
            const currentFirstNode = this.Head;
            newnode.next = currentFirstNode;
            currentFirstNode.prev = newnode;
            this.Head = newnode;
        }
        console.log(newnode.value);
    }
}

let Node1 = new DoublyLinkedList()
Node1.AppendEnd(12)
Node1.AppendEnd(13)
Node1.AppendEnd(14)
Node1.AppendEnd(15)