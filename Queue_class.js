class Queue {
    data = [];
    currentsize;
    max;
    constructor(x) {
        this.max = x
        this.currentsize = this.data.length
    }

    enqueue(y) {
        if (this.currentsize === this.max) {
            console.log('Queue is full');
        } else {
            this.data[this.currentsize] = y;
            this.currentsize++;
        }
    }

    dequeue() {
        if (this.currentsize > 0) {
            for (let i = 0; i < this.data.length; i++) {
                this.data[i] = this.data[i + 1]
            }
            this.currentsize--;
            this.data.length = this.currentsize;

            // this.data.shift();
            // this.currentsize--;
        } else {
            console.log('queue is already empty ');
        }
    }

    show() {
        console.log(this.data);
    }

    front() {
        console.log(this.data[0]);
    }

    rear(){
        console.log(this.data[this.data.length-1]);
    }
}

let s1 = new Queue(7);
s1.enqueue(12)
s1.enqueue(13)
s1.enqueue(14)
s1.enqueue(15)
s1.enqueue(16)
s1.enqueue(17)
s1.dequeue()
s1.show();
s1.front()
s1.rear();

let s2 = new Queue(6);
s2.enqueue(14);
s2.enqueue(15);
s2.enqueue(16);
s2.show();