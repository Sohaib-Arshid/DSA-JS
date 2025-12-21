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

    DeleteNode(data) {
        console.log('delete node');
        let counter = 1;
        let leadnode = this.head;
        if (data == 1) {
            this.head == this.head.next;
        } else {
            while (counter < data - 1) {
                leadnode = leadnode.next;
                counter++;
            }
            let nextnode = leadnode.next.next;
            leadnode.next = nextnode;
            console.log(leadnode);
        }
    }
}


let Node1 = new Node(200)
Node1.apendnode(300)
Node1.apendnode(100)
Node1.apendnode(400)
Node1.apendnode(500)
Node1.apendnode(600)
Node1.DeleteNode(5)
console.log(Node1);
