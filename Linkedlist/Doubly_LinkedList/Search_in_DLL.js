class Node {
    constructor(data) {
        this.prev = null;
        this.value = data;
        this.next = null;
    }
}

class search {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(data) {
        const newNode = new Node(data)
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const currentNode = this.tail;
            currentNode.next = newNode;
            newNode.prev = currentNode
            this.tail = newNode;
        }
        this.size++
    }

    traverse() {
        let currentNode = this.head;
        while (currentNode !== null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log("The length of DoublyLinkedList is --> (", this.size, ")");
    }

    searchfunction(data) {
        if (this.head === null) {
            return;
        } else {
            let currentNode = this.head;
            while (currentNode !== null) {
                if (currentNode.value === data) {
                    console.log("searching value found --> (", currentNode.value, ")");
                }
                currentNode = currentNode.next;
            }
        }
    }
}

const Node1 = new search()
Node1.append(12)
Node1.append(13)
Node1.append(14)
Node1.append(15)
Node1.append(16)
Node1.treverse()
Node1.searchfunction(12)

