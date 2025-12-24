class Node {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head;
        this.size = 1;
    }
    apendnode(newdata){
        let newnode = {
            value : newdata,
            next : null
        }
        this.tail.next = newnode;
        this.tail = newnode;
        this.size++;
    }
}


let Node1 = new Node(200)
Node1.apendnode(300)
Node1.apendnode(100)
Node1.apendnode(400)
Node1.apendnode(500)
Node1.apendnode(600)
console.log(Node1);
