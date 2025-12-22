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

    SearchingElement(data) {
        let counter = 1;
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.value === data) {
                console.log('Element found ', currentNode.value, 'index ', counter);
                console.log(currentNode);
                
            }
            currentNode = currentNode.next;
            counter++;
        }
    }

    searchElement2(data) {
                let result = undefined;
                let lead = this.head;
                let loop = true;
                while (loop) {
                    lead = lead.next;
                    loop = !!lead;
                    if (loop && lead.value === data) {
                        loop = false;
                        result = lead;
                    }
                }
                console.log(result)
            }
}


let Node1 = new Node(200)
Node1.apendnode(300)
Node1.apendnode(100)
Node1.apendnode(400)
Node1.apendnode(500)
Node1.apendnode(600)
Node1.SearchingElement(600)
Node1.searchElement2(100)
console.log(Node1);
