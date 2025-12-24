class Node {
    constructor(data) {
        this.prev = null;
        this.value = data;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
    }

    Append(data) {
        const newNode = new Node(data)
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const currentNode = this.tail;
            currentNode.next = newNode;
            newNode.prev = currentNode;
            this.tail = newNode;
        }
    }

    PrePend(data){
        const newNode = new Node(data)
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const currentNode = this.tail;
            newNode.next = currentNode;
            currentNode.prev = newNode;
            this.head = newNode;
        }
    }

    TraversingDLL(){
        if(this.head === null){
            return;
        }else{
            let currentNode = this.head;
            do{
                console.log(currentNode.value)
                currentNode = currentNode.next;
            }while (currentNode !== null);
        }
    }

    TraversingDLLEnd(){
        if(this.tail === null){
            return;
        }else{
            let currentNode = this.tail;
            do{
                console.log(currentNode.value)
                currentNode = currentNode.prev;
            }while (currentNode !== null);
        }
    }
}

const Node1 = new DoublyLinkedList();
Node1.Append(12);
Node1.PrePend(11)
Node1.PrePend(10)
Node1.PrePend(9)
console.log("trevers From End");
Node1.TraversingDLL();
console.log("trevers From End");
Node1.TraversingDLLEnd();
