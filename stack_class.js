class Stack {
    item = [];
    currentsize;
    maxsize;
    constructor(size) {
        this.maxsize = size;
        this.currentsize = this.item.length
    }
    push(x) {
        if (this.currentsize >= this.maxsize) {
            console.log('stack is allready full');
        } else {
            this.item.push(x)
            this.currentsize++;
        }
    }

    pop() {
        if (this.currentsize === 0) {
            console.log('stack is allready empty');
        } else {
            this.item.pop();
            this.currentsize--;
        }
    }

    display() {
        console.log(this.item);
    }
}

s1 = new Stack(5);
s1.push(12)
s1.push(13)
s1.push(14)
s1.push(15)
s1.pop()
s1.display()