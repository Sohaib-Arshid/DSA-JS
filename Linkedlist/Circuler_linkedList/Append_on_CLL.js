class Node {
    constructor(data) {
        this.value = data;
        this.next = null;
    }
}

class circulerlinkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
        } else {
            newNode.next = this.head;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    Prepend(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode
        }
        let currentNode = this.head;
        newNode.next = currentNode;
        this.head = newNode;
    }

    traverse() {
        if (this.head === null) {
            return
        } else {
            let currentNode = this.head;
            while (currentNode !== null) {
                console.log(currentNode.value);
                currentNode = currentNode.next
            }
        }
    }

    search(data) {
        if (this.head === null) {
            return;
        } else {
            let currentNode = this.head;
            while (currentNode !== null) {
                if (currentNode.value === data) {
                    console.log("searching value --> ", currentNode.value);
                }
                currentNode = currentNode.next;
            }
        }
    }
}

let Node1 = new circulerlinkedlist()
Node1.append(12)
Node1.append(13)
Node1.append(14)
Node1.append(15)
Node1.append(16)
Node1.Prepend(11)
Node1.Prepend(10)
Node1.traverse()
Node1.search(14)

