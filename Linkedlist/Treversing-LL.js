class traversing {
    constructor(data) {
        this.head = {
            value: data,
            next: null,
        }
        this.tail = this.head;
        this.size = 1;
    }
    appendnext(nextdata) {
        this.nextnode = {
            value: nextdata,
            next: null,
        }
        this.tail.next = this.nextnode;
        this.tail = this.nextnode;
        this.size++;
    }

    TraversFunction() {
        let counter = 0;
        let currentNode = this.head;
        while (counter < this.size) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
            counter++;
        }
    }
}

let travers1 = new traversing(100);
travers1.appendnext(300);
travers1.appendnext(400)
travers1.appendnext(100);
travers1.appendnext(200);
travers1.appendnext(400);
travers1.appendnext(800);
travers1.appendnext(700);
travers1.TraversFunction()

console.log(travers1);
