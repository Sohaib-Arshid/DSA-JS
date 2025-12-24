class Node {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head;
        this.size = 1;
    }
    apendnode(newdata) {
        let newnode = {
            value: newdata,
            next: null
        }
        this.tail.next = newnode;
        this.tail = newnode;
        this.size++;
    }

    insertdata(index, data) {
        let count = 1;
        if (index == 1) {
            newnode = {
                value: data,
                next: this.head
            }

            this.head = newnode
            this.size++;
            return;
        } else {

            let currentNode = this.head;

            while (count < index - 1) {
                currentNode = currentNode.next;
                count++
            }

            let newnode = {
                value: data,
                next: currentNode.next
            }

            currentNode.next = newnode;

            if (newnode.next === null) {
                this.tail = newnode;
            }
            this.size++;
        }
    }

}



let Node1 = new Node(200)
Node1.apendnode(300)
Node1.apendnode(100)
Node1.apendnode(400)
Node1.apendnode(500)
Node1.apendnode(600)
Node1.insertdata(2, 900)
console.log(Node1);
